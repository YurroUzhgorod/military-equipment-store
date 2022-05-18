<template>
  <div>
    <main-master-page>
      <template #content>
        <div><router-link to="/"> Home</router-link></div>
        <product-list />
      </template>
    </main-master-page>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductPage",
  components: {
    MainMasterPage,
    ProductList,
  },
  computed: {
    ...mapGetters(["getProductList"]),
  },
};
</script>

<style lang="scss" scoped></style>
