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
  display: flex;
  h1 {
    margin: auto;
  }
}
</style>
