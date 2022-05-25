<template>
  <div>
    <product-row v-for="item in getCartList" :key="item.id" :cart-item="item" />
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

<style lang="scss" scoped></style>
