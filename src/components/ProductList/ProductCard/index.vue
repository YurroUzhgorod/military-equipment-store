<template>
  <div class="product-container">
    <div class="product-image-container" @click="goToProductItem(product._id)">
      <img :src="product.photo" alt="" />
    </div>
    <div class="title">
      <strong> {{ product.title }} </strong>
    </div>
    <div class="product-price">
      <span> {{ product.price }} грн</span>
    </div>
    <hr />
    <div class="click-add-show-info-container">
      <div class="add-item-to-cart" @click="onAddToCart(product._id)">
        <img
          :src="require('@/assets/images/general-icons/add-to-cart-icon.png')"
          alt="no photo"
        />
      </div>

      <div class="edit-item">
        <button @click="onEdit(product._id)">змінити</button>
      </div>

      <div class="delete-item">
        <button @click="onDelete(product._id)">видалити</button>
      </div>
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
    ...mapActions("cartList", ["addProductItem"]),

    onAddToCart(id) {
      this.addProductItem(id);
    },

    ...mapActions("products", ["deleteProduct"]),

    onDelete(id) {
      this.deleteProduct(id);
    },
    onEdit(id) {
      this.$router.push({ name: "edit", params: { id } });
    },
    goToProductItem(itemId) {
      this.$router.push({ name: "prodItemInfo", params: { id: itemId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-container {
  display: inline-block;

  // background-color: rgb(201, 199, 190);

  // border-radius: 5px;
  // padding: 10px;
  margin: 0 15px 15px 15px;
}
.product-price {
  margin: 3px 0 3px 0;
  text-align: center;
}
.product-image-container {
  text-align: center;
  img {
    width: 200px;
    height: 200px;
    &:hover {
      cursor: pointer;
    }
  }
}
button {
  border: 1px solid black;
  padding: 2px;
  margin: 1px;
  border-radius: 5px;
}
.title {
  text-align: center;
}

.click-add-show-info-container {
  display: flex;
  justify-content: space-around;

  padding: 5px 0 0 0;

  justify-content: space-around;
  margin: auto;
  img {
    width: 30px;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}

//     .add-item-to-cart {
//       margin: 3px;
//     }
//   }
//   .delete-item {
//     margin: 3px 0 0 0;
//   }
// }
</style>
