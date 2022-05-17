<template>
  <div class="card-container">
    {{ product.name }}
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 80px;
  height: 80px;
  background-color: lightgrey;
}
</style>
