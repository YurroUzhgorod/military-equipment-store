<template>
  <main-master-page>
    <template #content>
      <delivery-info-block />

      <div class="breadcrumbs-container">
        <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
      </div>

      <addition-info />
      <div class="category-info-wrapper">
        <component :is="activeComponent"></component>
      </div>

      <div class="content-container">
        <div class="sorting-items-container">
          <div class="category-title"><span> CОРТУВАННЯ </span></div>
          <div class="select-input-container">
            <select v-model="searchParamsObj.sortRule">
              <option :value="null" selected>Не вибрано</option>
              <option value="priseIncrease">По ціні(зменшення)</option>
              <option value="priseDecrease">По ціні(зібльшення)</option>
              <option value="dateNew">По даті(спочатку новіші)</option>
              <option value="dateLast">По даті(спочатку старіші)</option>
              <option value="nameA">Ім'ям(Я-А)</option>
              <option value="nameZ">Ім'ям(А-Я)</option>
            </select>
          </div>
        </div>

        <div class="filter-block-container">
          <div class="filter-blok-title">ФІЛЬТР ПІДБОРУ</div>
          <div class="filter-options-container">
            <div class="category-filter-container">
              <div class="category-filter-title">
                <hr />

                <p>Виберіть категорію</p>
              </div>
              <div class="category-select-container">
                <select v-model="searchParamsObj.category">
                  <option :value="null" selected>не вибрано</option>
                  <option
                    v-for="(value, key, index) in allCategoryAndSubcategory"
                    :key="index"
                    :value="key"
                  >
                    {{ key }}
                  </option>
                </select>
              </div>
            </div>

            <div
              class="sub-category-filter-container"
              v-if="this.searchParamsObj.category"
            >
              <hr />
              <div class="sub-category-filter-title">
                <p>Виберіть під-категорію</p>
              </div>
              <div class="sub-category-select-container">
                <select v-model="searchParamsObj.subCategory">
                  <option :value="null">не вибрано</option>
                  <option
                    v-for="(subcategory, index) in allCategoryAndSubcategory[
                      this.searchParamsObj.category
                    ]"
                    :key="index"
                    :value="subcategory"
                  >
                    {{ subcategory }}
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

            <div>
              <button @click="onGoToFilteredProducts()">
                <span> ПОШУК </span>
              </button>
            </div>
            <div>
              <button @click="onClearSearchParamsObj(searchParamsObj)">
                <span> Скинути </span>
              </button>
            </div>
          </div>
        </div>
        <div class="product-list-container">
          <product-list />
        </div>
      </div>
    </template>
  </main-master-page>
</template>

<script>
import BagsDescrip from "@/components/CategoryDescription/BagsDescrip.vue";
import BootsDescrip from "@/components/CategoryDescription/BootsDescrip.vue";
import ClothesDescrip from "@/components/CategoryDescription/ClothesDescrip.vue";
import EquipmentDescrip from "@/components/CategoryDescription/EquipmentDescrip.vue";
import GlassesDescrip from "@/components/CategoryDescription/GlassesDescrip.vue";

import DeliveryInfoBlock from "@/components/DeliveryInfoBlock";
import ProductList from "@/components/ProductList";
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import AdditionInfo from "@/components/AdditionInfo";

import { mapActions } from "vuex";

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
    BagsDescrip,
    BootsDescrip,
    ClothesDescrip,
    EquipmentDescrip,
    GlassesDescrip,
  },
  data() {
    return {
      manufacturerList,
      allCategoryAndSubcategory,
      searchParamsObj: {},

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
    activeComponent() {
      switch (this.checkRouteCategory) {
        case "bags_and_backpacks":
          return BagsDescrip;
        case "boots":
          return BootsDescrip;
        case "clothes":
          return ClothesDescrip;
        case "glasses":
          return GlassesDescrip;
        case "equipment":
          return EquipmentDescrip;
        default:
          return null;
      }
    },

    checkRouteCategory() {
      return this.$route.params.category;
    },

    checkRouteSubCategory() {
      return this.$route.params.subCategory;
    },
  },
  methods: {
    ...mapActions("products", ["loadProducts"]),

    onClearSearchParamsObj() {
      this.searchParamsObj = {};
    },

    onGoToFilteredProducts() {
      let search = {};
      if (this.searchParamsObj.category && this.searchParamsObj.category.length)
        search.category = this.searchParamsObj.category;
      if (
        this.searchParamsObj.subCategory &&
        this.searchParamsObj.subCategory.length
      )
        search.subCategory = this.searchParamsObj.subCategory;
      if (
        this.searchParamsObj.manufacturer &&
        this.searchParamsObj.manufacturer.length
      )
        search.manufacturer = this.searchParamsObj.manufacturer;
      if (this.searchParamsObj.title && this.searchParamsObj.title.length)
        search.title = this.searchParamsObj.title;

      if (
        this.searchParamsObj.sortRule &&
        this.searchParamsObj.sortRule.length
      ) {
        search.sortRule = this.searchParamsObj.sortRule;
      }

      this.loadProducts(search);
    },

    onAddNewProduct() {
      this.$router.push({
        name: "edit",
      });
    },

    checkSortParams() {
      console.log(this.searchParamsObj);
      this.loadProducts(this.searchParamsObj);
    },
  },
  watch: {
    checkRouteCategory(newValue) {
      this.items[1].text = newValue;
    },
    checkRouteSubCategory(newValue) {
      this.items[2].text = newValue;
    },
  },
  mounted() {
    this.searchParamsObj.category = this.$route.params.category;
    this.searchParamsObj.subCategory = this.$route.params.subCategory;
  },
};
</script>

<style lang="scss" scoped>
.content-container {
  display: grid;
  grid-template-areas:
    "sorting-items-container sorting-items-container sorting-items-container sorting-items-container sorting-items-container"
    "filter-block-container product-list-container product-list-container product-list-container product-list-container";

  font-family: Georgia;
  .sorting-items-container {
    grid-area: sorting-items-container;
    background-color: grey;
    margin: 15px;

    display: flex;
    justify-content: space-around;
  }
  .product-list-container {
    grid-area: product-list-container;
  }

  .filter-block-container {
    grid-area: filter-block-container;
    max-height: 600px;
    margin: 0 20px 0 25px;
    width: 250px;

    display: inline-block;

    div {
      padding-bottom: 10px;
    }
    button {
      padding: 7px;
      background-color: grey;
      &:hover {
        cursor: pointer;
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
  margin-left: 35px;
  border: 1px solid #d7d7d7;
  padding: 5px;
  border-radius: 2px;
}
select:hover {
  background: #cde4f7;
  border: 1px solid #41c9ff;
}

select:focus {
  -webkit-box-shadow: 0 0 3px 1px #7cdaff;
  -moz-box-shadow: 0 0 3px 1px #7cdaff;
  box-shadow: 0 0 3px 1px #7cdaff;
}
select:before {
  content: "▼";
}
option {
  background: #fff;
  border-color: #41c9ff;
  border-radius: 2px;
  line-height: 18px;
  outline: none;
  -webkit-box-shadow: 0 0 3px 1px #c00;
  -moz-box-shadow: 0 0 3px 1px #c00;
  box-shadow: 0 0 3px 1px #c00;
}
option:focus {
  -webkit-box-shadow: 0 0 3px 1px #7cdaff;
  -moz-box-shadow: 0 0 3px 1px #7cdaff;
  box-shadow: 0 0 3px 1px #7cdaff;
}
</style>
