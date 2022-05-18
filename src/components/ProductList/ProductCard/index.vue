<template>
  <div class="product-container">
    <div>
      <img :src="product.imgSrc" alt="no photo" />
    </div>
    <div>
      {{ product.title }}
    </div>
    <div>
      {{ product.price }} грн
      <button @click="onAdd">+</button>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  name: "ProductCart",

  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },

  //   methods: {
  //     ...mapActions(["addProduct"]),
  //     onAdd() {
  //       this.addPizza(this.pizza.id);
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
.product-container {
  width: 150px;
  border: 2px solid green;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  img {
    width: 130px;
  }
}
</style>
