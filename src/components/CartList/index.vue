<template>
  <div v-if="getCartList.length">
    <product-row v-for="item in getCartList" :key="item.id" :cart-item="item" />
  </div>
  <div v-else class="empty-cart-container">
    <h1>Корзина пуста</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductRow from "./ProductRow.vue";
export default {
  name: "CartList",
  components: {
    ProductRow,
  },

  computed: {
    ...mapGetters("cartList", ["getCartList"]),
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
