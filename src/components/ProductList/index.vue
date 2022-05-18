<template>
  <div class="container">
    <div class="list-container">
      <product-card
        v-for="productItem in getProductList"
        :key="productItem.id"
        :product="productItem"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "./ProductCard";
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["getProductList"]),
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
