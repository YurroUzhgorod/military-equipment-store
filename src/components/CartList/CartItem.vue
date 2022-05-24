<template>
  <div></div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped></style>
