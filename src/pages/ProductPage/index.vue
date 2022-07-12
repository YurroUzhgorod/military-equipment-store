<template>
  <main-master-page>
    <template #content>
      <delivery-info-block />

      <div class="breadcrumbs-container">
        <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
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
import DeliveryInfoBlock from "@/components/DeliveryInfoBlock";
import ProductList from "@/components/ProductList";
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductPage",
  components: {
    MainMasterPage,
    ProductList,
    DeliveryInfoBlock,
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
    ...mapGetters(["getProductList"]),

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
  }
}

.breadcrumbs-container {
  font-family: Georgia;
}
.filter-block-container {
  margin: 15px 10px 10px 10px;
}
</style>
