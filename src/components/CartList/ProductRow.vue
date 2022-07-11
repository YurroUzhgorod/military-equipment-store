<template>
  <div class="product-row-container">
    <div>
      <img :src="product.photo" alt="" />
    </div>
    <div class="product-info">
      {{ product.title }}
    </div>
    <div class="product-info">{{ product.price }} грн</div>
    <div>
      <button @click="onDecrement">-</button>

      <span>{{ cartItem.count }} шт</span>
      <button @click="onIncrement">+</button>
      <button @click="onDelete">delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductRow",

  props: {
    cartItem: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    ...mapGetters("products", ["getProductById"]),

    product() {
      console.log("продукт в якого фото адрефайн");
      console.log(this.getProductById(this.cartItem.prodId));
      return this.getProductById(this.cartItem.prodId);
    },
  },

  methods: {
    ...mapActions("cartList", ["cartAction"]),

    onDecrement() {
      this.cartAction({
        type: "decrement",
        value: this.cartItem.id,
      });
    },
    onIncrement() {
      this.cartAction({
        type: "increment",
        value: this.cartItem.id,
      });
    },
    onDelete() {
      this.cartAction({
        type: "delete",
        value: this.cartItem.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-row-container {
  display: flex;
  width: 600px;
  margin: 5px auto;
  border: 2px black solid;
  button {
    width: 60px;
    background-color: antiquewhite;
    margin: 10px;
    border: 2px black solid;
  }
  .product-info {
    width: 80px;
    background-color: rgb(211, 206, 199);
    margin: 10px;
    border: 2px rgb(211, 206, 199) solid;
  }
  .product-info {
    text-decoration-color: aqua;
  }
}

img {
  width: 80px;
  height: 80px;
}
</style>
