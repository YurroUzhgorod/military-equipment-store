<template>
  <div>
    <cart-item />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "CartList",
  components: {
    CartItem,
  },
};
</script>

<style lang="scss" scoped></style>
