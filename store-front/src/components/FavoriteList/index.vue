<template>
  <div v-if="getFavoriteList.length">
    <product-card
      v-for="product in getFavoriteList"
      :key="product._id"
      :product="product"
    />
  </div>
  <div v-else class="empty-cart-container">
    <h1>Список ваших закладок пустий</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "@/components/ProductList/ProductCard";
export default {
  name: "CartList",
  components: {
    ProductCard,
  },

  computed: {
    ...mapGetters("favoriteList", ["getFavoriteList"]),
  },
};
</script>

<style lang="scss" scoped>
.empty-cart-container {
  text-align: center;
  h1 {
    display: inline-block;
    margin: 50px 0 150px 0;
  }
}
</style>
