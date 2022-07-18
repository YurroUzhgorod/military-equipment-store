<template>
  <div class="cart-list-wrapper" v-if="getCartList.length">
    <div class="cart-list-container">
      <div class="cart-list">
        <product-row
          v-for="item in getCartList"
          :key="item.id"
          :cart-item="item"
        />
      </div>
      <div class="order-form-wrapper">
        <div></div>
        <div class="order-form-container">
          <div class="cart-total-price">{{ getTotalPrice }} грн</div>
          <div class="order-form" @click="onGoToOrderForm">
            Оформити замовлення
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="empty-cart-container">
    <h1>Корзина пуста</h1>
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
    ...mapGetters("cartList", ["getCartList", "getTotalPrice"]),
  },
  methods: {
    onGoToOrderForm() {
      this.$router.push({
        name: "orderForm",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs-container {
  font-family: georgia;
  font-size: 20px;
}
.cart-list-wrapper {
  display: flex;
  .cart-list-container {
    margin: auto;
    padding: 7px;
    border: 1px solid rgb(164, 155, 155);
    margin: 10px auto;
    border-radius: 4px;

    display: inline-block;
    display: flex;
    flex-direction: column;
    .cart-list {
      display: inline-block;

      margin: 10px auto;
    }
    .order-form-wrapper {
      display: flex;
      justify-content: space-between;
      .order-form-container {
        padding: 10px;
        width: 400px;
        height: 80px;
        margin: 0 10px 10px 0;
        display: flex;
        // border: 1px solid rgb(164, 155, 155);
        background-color: rgb(214, 212, 212);
        border-radius: 4px;

        .cart-total-price {
          margin: auto;
          font-size: 25px;
        }
        .order-form {
          background-color: rgb(63, 102, 38);
          border-radius: 4px;
          color: white;
          margin: auto;
          margin: 5px;
          padding: 10px;

          &:hover {
            cursor: pointer;
            background-color: rgb(43, 119, 43);
          }
        }
      }
    }
    text-align: right;
  }
}

.empty-cart-container {
  text-align: center;
  h1 {
    display: inline-block;
    margin: 50px 0 150px 0;
  }
}
</style>
