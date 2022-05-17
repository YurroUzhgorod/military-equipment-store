<template>
  <div class="products">
    <div class="col-md-4" v-for="(item, index) in productsList" :key="index">
      <product-card :product="item"></product-card>
    </div>
  </div>
</template>

<script>
import { products } from "../../products-list";
import ProductCard from "../../components/ProductCard";

export default {
  name: "productList",
  components: { ProductCard },
  data() {
    return {
      productsList: [],
    };
  },
  methods: {
    getAllProducts: function () {
      this.productsList = products;
    },
  },

  created() {
    this.getAllProducts();
  },
};
</script>

<style lang="css">
.products {
  margin-top: 40px;
}
</style>
