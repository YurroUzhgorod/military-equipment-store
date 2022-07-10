<template>
  <div class="product-container">
    <div>
      {{ product.title }}
    </div>
    <div>{{ product.price }} грн</div>

    <img :src="product.photo" alt="" />
    <hr />
    <div>
      <button @click="onDelete(product._id)">Видалити</button>
      <button @click="onEdit(product._id)">Редагувати</button>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
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
    // ...mapActions("cartList", ["addProductItem"]),

    ...mapActions("products", ["deleteProduct"]),

    onDelete(id) {
      this.deleteProduct(id);
    },
    onEdit(id) {
      this.$router.push({ name: "edit", params: { id } });
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
