<template>
  <main-master-page>
    <template #content>
      <product-list />
    </template>
  </main-master-page>
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
  methods: {
    onAddNewProduct() {
      this.$router.push({
        name: "edit",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-link {
  width: 70px;
  margin: auto;
}
</style>
