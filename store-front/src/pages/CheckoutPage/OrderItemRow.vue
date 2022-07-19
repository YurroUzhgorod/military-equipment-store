<template>
  <div class="order-item-container">
    <div class="order-item-photo-container">
      <img :src="orderItem.prodPhoto" alt="product-photo" />
    </div>

    <div class="order-item-title">
      {{ orderItem.prodTitle }}
    </div>

    <div class="count-value">Кількість: {{ orderItem.count }}</div>

    <div class="cart-item-price">{{ itemTotalPrice }} грн</div>
  </div>
</template>

<script>
export default {
  name: "ProductRow",

  props: {
    orderItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    itemTotalPrice() {
      return this.orderItem.prodPrice * this.orderItem.count;
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.order-item-container {
  margin: 10px;
  font-size: 15px;
  font-family: georgia;
  display: inline-block;
  width: 90%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px rgb(213, 207, 207) solid;
  .order-item-photo-container {
    display: flex;

    // margin: auto;

    img {
      margin: auto;
      width: 80px;
    }
  }
  .order-item-title {
    margin: auto;
  }
  .count-value {
    margin: auto;
  }
  .cart-item-price {
    margin: auto;
  }
}
</style>
