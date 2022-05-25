<template>
  <div class="product-container">
    <div>
      <img :src="product.imgSrc" alt="no photo" />
    </div>
    <div>
      {{ product.title }}
    </div>
    <div>{{ product.price }} грн</div>
    <div>
      <hr />

      <button @click="onAdd">add</button>
      <button @click="$emit('on-edit')">edit</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductCart",
  components: {},
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions("cartList", ["addProductItem"]),

    onAdd() {
      this.addProductItem(this.product.id);
    },
  },
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
  button {
    border: 1px green solid;
    width: 40px;
    margin: 5px;
  }
}
</style>
