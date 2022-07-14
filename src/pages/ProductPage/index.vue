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
        <div class="filter-block-container">
          <div class="filter-blok-title">ФІЛЬТР ПІДБОРУ</div>
          <div class="filter-options-container">
            <div class="category-filter-container">
              <div class="category-filter-title">
                <p>Виберіть категорію</p>
              </div>
              <div class="category-select-container">
                <select v-model="searchParamsObj.category">
                  <option value="">не вибрано</option>
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

            <hr />
            <div class="sub-category-filter-container">
              <div class="sub-category-filter-title">
                <p>Виберіть під-категорію</p>
              </div>
              <div class="sub-category-select-container">
                <select v-model="searchParamsObj.subCategory">
                  <option value="">не вибрано</option>
                  <option
                    v-for="(subcategory, index) in allCategoryAndSubcategory[
                      this.searchParamsObj.category ||
                        this.$route.params.category
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
              <button @click="onGoToFilteredProducts(searchParamsObj)">
                <span> ПОШУК </span>
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

    async onGoToFilteredProducts(searchParamsObj) {
      await this.loadProducts(searchParamsObj);
      this.searchParamsObj = {};
    },
    onAddNewProduct() {
      this.$router.push({
        name: "edit",
      });
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
};
</script>

<style lang="scss" scoped>
.content-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-auto-rows: minmax(30 auto);
  font-family: Georgia;

  .filter-block-container {
    max-height: 500px;
    margin: 0 20px 0 25px;

    display: inline-block;
    .filter-blok-title {
      margin: auto;
      font-size: 20px;
      font-weight: 800;
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
