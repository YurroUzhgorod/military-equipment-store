<template>
  <main-master-page>
    <template #content>
      <delivery-info-block />

      <div class="breadcrumbs-container">
        <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
      </div>

      <addition-info />
      <div v-if="isLoading">ЗАГРУЗКА...ПОЧЕКАЙТЕ!</div>
      <div v-if="isError">ПОМИЛКА !</div>

      <div v-if="!isLoading && !isError" class="content-container">
        <div class="sorting-items-container">
          <div class="sorting-category-title"><span> CОРТУВАННЯ: </span></div>
          <div class="select-input-container">
            <select
              v-model="searchParamsObj.sortRule"
              @change="onGoToFilteredProducts"
            >
              <option :value="null" selected>Не вибрано</option>
              <option value="priseIncrease">По ціні(збільшення)</option>
              <option value="priseDecrease">По ціні (зменшення)</option>
              <option value="dateNew">По даті (спочатку новіші)</option>
              <option value="dateLast">По даті (спочатку старіші)</option>
              <option value="nameA">Ім'ям (Я-А)</option>
              <option value="nameZ">Ім'ям (А-Я)</option>
            </select>
          </div>
        </div>

        <div
          class="filter-block-container"
          v-if="checkRouteCategory !== 'new-in'"
        >
          <div class="filter-blok-title">ФІЛЬТР ПІДБОРУ</div>
          <div class="filter-options-container">
            <div
              class="sub-category-filter-container"
              v-if="!this.$route.params.subCategory"
            >
              <hr />
              <div class="sub-category-filter-title">
                <p>Виберіть під-категорію</p>
              </div>
              <div class="sub-category-select-container">
                <select v-model="searchParamsObj.subCategory">
                  <option :value="null">не вибрано</option>
                  <option
                    v-for="(value, key, index) in allCategoryAndSubcategory[
                      this.searchParamsObj.category
                    ]"
                    :key="index"
                    :value="key"
                  >
                    {{ value.ua }}
                  </option>
                </select>
              </div>
            </div>

            <hr />

            <div class="manufacturer-filter-container">
              <div class="manufacturer-filter-title">
                <p>Виберіть виробника</p>
              </div>
              <div class="manufacturer-select-container">
                <select v-model="searchParamsObj.manufacturer">
                  <option :value="null" selected>не вибрано</option>
                  <option
                    v-for="(manufacturer, index) in manufacturerList"
                    :key="index"
                    :value="manufacturer"
                  >
                    {{ manufacturer }}
                  </option>
                </select>
              </div>
            </div>
            <hr />
            <div class="price-range-filter-container">
              <div class="min-price-filter-title">
                <p>Мінімальна ціна</p>
              </div>
              <div class="min-price-input-container">
                <input
                  type="number"
                  placeholder="  ..."
                  min="1"
                  maxlength="1000"
                  v-model.number="searchParamsObj.minPrice"
                />
              </div>
              <div class="min-price-filter-title">
                <p>Максимальна ціна</p>
              </div>
              <div class="max-price-input-container">
                <input
                  type="number"
                  placeholder="  ..."
                  max="10000"
                  maxlength="10000"
                  v-model.number="searchParamsObj.maxPrice"
                />
              </div>
            </div>

            <div class="filtering-btn" @click="onGoToFilteredProducts()">
              <span> ПОШУК </span>
            </div>
            <div
              class="filtering-btn"
              @click="onClearSearchParamsObj(searchParamsObj)"
            >
              <span> СКИНУТИ </span>
            </div>
          </div>
        </div>
        <div class="product-list-container">
          <product-list />
        </div>

        <div class="pagination-wrapper">
          <div class="pagination-block">
            <div
              class="pagination-button"
              @click="onGoChangePageOfProducts('onStart')"
            >
              <img
                :src="
                  require('@/assets/images/general-icons/angle-double-left.png')
                "
                alt="no photo"
              />
            </div>
            <div
              class="pagination-button"
              @click="onGoChangePageOfProducts('prev')"
            >
              <img
                :src="require('@/assets/images/general-icons/angle-left.png')"
                alt="no photo"
              />
            </div>

            <div class="pagination-button">{{ currentPageNumber }}</div>
            <div
              class="pagination-button"
              @click="onGoChangePageOfProducts('next')"
            >
              <img
                :src="require('@/assets/images/general-icons/angle-right.png')"
                alt="no photo"
              />
            </div>

            <div
              class="pagination-button"
              @click="onGoChangePageOfProducts('end')"
            >
              <img
                :src="
                  require('@/assets/images/general-icons/angle-double-right.png')
                "
                alt="no photo"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </main-master-page>
</template>

<script>
import DeliveryInfoBlock from "@/components/DeliveryInfoBlock";
import ProductList from "@/components/ProductList";
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import AdditionInfo from "@/components/AdditionInfo";

import { mapActions, mapGetters } from "vuex";

import {
  manufacturerList,
  allCategoryAndSubcategory,
} from "@/components/EditProductForm/settings";
export default {
  name: "ProductPage",
  components: {
    MainMasterPage,
    ProductList,
    DeliveryInfoBlock,
    AdditionInfo,
  },
  data() {
    return {
      manufacturerList,
      allCategoryAndSubcategory,
      searchParamsObj: {},
      currentPageNumber: 1,
      // filteredProdCount: 0,

      items: [
        {
          text: "home",
          disabled: false,
        },
        {
          text: this.$route.params.category,
          disabled: false,
        },
        {
          text: this.$route.params.subCategory,
          disabled: true,
        },
      ],
    };
  },

  computed: {
    ...mapGetters("products", [
      "getFilteredProductCount",
      "isLoading",
      "isError",
    ]),

    checkRouteCategory() {
      return this.$route.params.category;
    },

    checkRouteSubCategory() {
      return this.$route.params.subCategory;
    },
    productCount() {
      return this.getFilteredProductCount;
    },
  },
  methods: {
    ...mapActions("products", ["loadProducts"]),

    onClearSearchParamsObj() {
      this.searchParamsObj = {};
      this.searchParamsObj.category = this.$route.params.category;
    },

    onGoChangePageOfProducts(pageAction) {
      let countOfPages = Math.ceil(this.productCount / 8);

      if (pageAction === "onStart") this.currentPageNumber = 1;
      if (pageAction === "prev" && this.currentPageNumber !== 1)
        this.currentPageNumber -= 1;
      if (pageAction === "next" && this.currentPageNumber !== countOfPages)
        this.currentPageNumber += 1;
      if (pageAction === "end") this.currentPageNumber = countOfPages;
      this.searchParamsObj.pageNumber = this.currentPageNumber;

      this.loadProducts(this.searchParamsObj);
    },

    onGoToFilteredProducts() {
      this.searchParamsObj.pageNumber = 1;
      this.CurrentPageNumber = 1;
      this.loadProducts(this.searchParamsObj);
    },

    onAddNewProduct() {
      this.$router.push({
        name: "edit",
      });
    },

    checkSortParams() {
      this.loadProducts(this.searchParamsObj);
    },
  },
  watch: {
    checkRouteCategory(newValue) {
      this.items[1].text = newValue;
      this.searchParamsObj.category = this.$route.params.category;
      this.onClearSearchParamsObj();
      this.currentPageNumber = 1;
      this.searchParamsObj.pageNumber = 1;
    },
    checkRouteSubCategory(newValue) {
      this.items[2].text = newValue;
      this.searchParamsObj.subCategory = this.$route.params.subcategory;
      this.onClearSearchParamsObj();
      this.currentPageNumber = 1;
      this.searchParamsObj.pageNumber = 1;
    },

    // checkProductLength(newValue) {
    //   console.log("newValue");
    //   console.log(newValue);

    //   if (newValue) this.filteredProdCount = newValue;
    // },
  },
  mounted() {
    this.searchParamsObj.category = this.$route.params.category;
    this.searchParamsObj.subCategory = this.$route.params.subCategory;
  },
};
</script>

<style lang="scss" scoped>
.content-container {
  font-family: Georgia;
  margin: 30px 15px 15px 20px;
  display: grid;
  grid-template-areas:
    "filter-block-container  sorting-items-container sorting-items-container sorting-items-container sorting-items-container sorting-items-container sorting-items-container"
    "filter-block-container product-list-container product-list-container product-list-container product-list-container product-list-container product-list-container"
    " pagination-block pagination-block pagination-block pagination-block pagination-block pagination-block  pagination-block  ";

  .sorting-items-container {
    grid-area: sorting-items-container;

    height: 50px;
    // margin: 15px;
    .sorting-category-title {
      // margin: auto;
      font-size: 20px;
      font-weight: 800;
    }

    display: flex;
  }
  .product-list-container {
    grid-area: product-list-container;
  }

  .filter-block-container {
    border: 3px solid rgb(246, 246, 246);
    padding: 10px;
    grid-area: filter-block-container;
    max-height: 600px;
    max-width: 400px;
    margin: 0 20px 0 25px;
    width: 250px;
    display: flex;
    flex-direction: column;
    display: inline-block;
    .filter-options-container {
      display: flex;
      flex-direction: column;

      margin: auto;
    }

    div {
      padding-bottom: 10px;
    }
    .filtering-btn {
      display: flex;
      padding: 5px;
      margin: 10px 0 10px 0px;
      background-color: rgb(209, 202, 202);
      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }

      span {
        margin: auto;
      }
    }
    .filter-blok-title {
      margin: auto;
      font-size: 20px;
      font-weight: 800;
    }
    input {
      border: 1px #d7d7d7 solid;
    }

    .category-filter-container {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      .category-filter-title {
        width: 100%;
        margin: auto;
      }
    }
    .sub-category-filter-container {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      .category-filter-title {
        margin: auto;
      }
    }
  }
}

.breadcrumbs-container {
  font-family: Georgia;
}

.category-info-wrapper {
  font-family: georgia;
  font-size: 14px;
}

//---------------

select {
  //   margin-left: 35px;
  border: 1px solid #b1aeae;
  background-color: rgb(232, 228, 228);

  //   padding: 5px;
  //   border-radius: 2px;
  // }
  select:hover {
    background: #cde4f7;
    border: 1px solid #41c9ff;
  }
}
// select:focus {
//   -webkit-box-shadow: 0 0 3px 1px #7cdaff;
//   -moz-box-shadow: 0 0 3px 1px #7cdaff;
//   box-shadow: 0 0 3px 1px #7cdaff;
// }
// select:before {
//   content: "▼";
// }
// option {
//   background: #fff;
//   border-color: #41c9ff;
//   border-radius: 2px;
//   line-height: 18px;
//   outline: none;
//   -webkit-box-shadow: 0 0 3px 1px #c00;
//   -moz-box-shadow: 0 0 3px 1px #c00;
//   box-shadow: 0 0 3px 1px #c00;
// }
// option:focus {
//   -webkit-box-shadow: 0 0 3px 1px #7cdaff;
//   -moz-box-shadow: 0 0 3px 1px #7cdaff;
//   box-shadow: 0 0 3px 1px #7cdaff;
// }

.pagination-wrapper {
  display: flex;
  grid-area: pagination-block;

  .pagination-block {
    font-size: 25px;

    display: flex;
    margin: auto;
    img {
      height: 17px;
    }

    .pagination-button {
      margin: 12px;
      padding: 5px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
