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
        <div class="filter-block-container">Це блок для фільтрацій</div>
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
  grid-template-columns: 1fr 5fr;
  grid-auto-rows: minmax(30 auto);
  font-family: Georgia;
  .filter-block-container {
    background-color: rgb(183, 171, 171);
    margin: 5px 10px 10px 15px;
  }
}

.breadcrumbs-container {
  font-family: Georgia;
}

.category-info-wrapper {
  font-family: georgia;
  font-size: 14px;
}
</style>
