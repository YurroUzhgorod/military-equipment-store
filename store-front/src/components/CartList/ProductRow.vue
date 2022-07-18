<template>
  <div class="product-item-container">
    <div class="cart-item-photo-container">
      <img :src="cartItem.prodPhoto" alt="product-photo" />
    </div>
    <div class="product-info">
      <div class="prod-info-top">
        <div class="cart-item-title">
          {{ cartItem.prodTitle }}
        </div>
        <div class="delete-item-container">
          <v-icon @click="onDelete">mdi-close-circle-outline</v-icon>
        </div>
      </div>
      <div class="prod-info-bottom">
        <div class="prod-item-another"></div>
        <div class="count-items-container">
          <button @click="onDecrement">-</button>
          <div class="count-value">{{ cartItem.count }}</div>
          <button @click="onIncrement">+</button>
        </div>
        <div class="cart-item-price">{{ itemTotalPrice }} грн</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductRow",

  props: {
    cartItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    itemTotalPrice() {
      return this.cartItem.prodPrice * this.cartItem.count;
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
.product-item-container {
  font-family: georgia;
  border-bottom: 2px rgb(213, 207, 207) solid;
  text-align: center;
  margin: 30px;
  display: inline-block;
  width: 800px;
  height: 135px;
  display: flex;

  .cart-item-photo-container {
    margin: auto;
    width: 30%;
    display: flex;

    img {
      margin: 5px auto;
      width: 120px;
    }
  }
  .product-info {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    width: 70%;
    .prod-info-top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      // justify-content: space-between;
      height: 50%;

      .cart-item-title {
      }
      .delete-item-container {
      }
    }
    .prod-info-bottom {
      display: flex;
      justify-content: space-between;
      height: 50%;
      .prod-item-another {
      }
      .count-items-container {
        display: flex;
        .count-value {
          width: 50px;
          height: 40px;
          margin: auto;
          padding: 2px;
          border: 1px solid rgb(0, 0, 0);
          border-radius: 4px;
        }
        button {
          margin: 10px;
          font-size: 30px;
        }
      }
      .cart-item-price {
        font-size: 26px;
      }
    }
  }
}
</style>
