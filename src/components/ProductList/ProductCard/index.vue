<template>
  <div class="product-container">
    <div class="product-image-container" @click="goToProductItem(product._id)">
      <img :src="product.photo" alt="" />
    </div>
    <div class="title">
      <strong> {{ product.title }} </strong>
    </div>
    <div class="product-price">
      <span class="product-item-price"> {{ product.price }} грн</span>
    </div>
    <hr />
    <div>
      <div v-if="this.product.is_available">
        <span class="product-item-status"> В наявності </span>
      </div>
      <div v-else>
        <span class="product-item-status"> Товар очікується </span>
      </div>
    </div>
    <div class="click-add-show-info-container">
      <div
        class="add-item-to-cart"
        v-if="this.product.is_available"
        @click="onAddToCart(product._id)"
      >
        <img
          :src="require('@/assets/images/general-icons/add-to-cart-icon.png')"
          alt="no photo"
        />
      </div>

      <div class="edit-item" v-if="getUserStatus()">
        <img
          @click="onEdit(product._id)"
          :src="require('@/assets/images/general-icons/edit-icon.png')"
          alt="no photo"
        />
      </div>

      <div class="delete-item" v-if="getUserStatus()">
        <img
          @click="onDelete(product._id)"
          :src="require('@/assets/images/general-icons/delete-icon.png')"
          alt="no photo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductCart",
  components: {},
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    ...mapGetters("auth", ["getUserStatus"]),
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
  mounted() {
    console.log(this.isAdminData);
  },
};
</script>

<style lang="scss" scoped>
.product-container {
  display: inline-block;

  // background-color: rgb(201, 199, 190);

  // border-radius: 5px;
  padding-top: 10px;
  margin: 0 10px 15px 15px;

  .product-item-status {
    background-color: rgb(208, 208, 189);
    padding: 0 1px 0 1px;
  }
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
