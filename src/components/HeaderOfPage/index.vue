<template>
  <div class="container">
    <div class="authorization-block">
      <p>Зайдіть або створіть аккаунт</p>
    </div>
    <div class="flex-container">
      <div class="logo-images-container" @click="goToRoute('homePage')">
        <img
          :src="require('@/assets/images/general-icons/store-logo.jpg')"
          alt="No photo"
        />
      </div>

      <div class="search-product-container">
        <input type="text" placeholder="  пошук" class="block-search-input" />
        <button @click="onSearchProduct">Найти</button>
      </div>

      <div class="cart-container">
        <div class="pop-up-cart-empty" v-if="getTotalPrice === 0">
          <img
            :src="require('@/assets/images/general-icons/cart-icon.png')"
            alt="No photo"
            @click="showEmptyCartPopUp"
          />
          <div class="pop-up-container" v-if="isShowPopUp">
            <empty-cart-pop-up @changeVisible="changeVisible" />
          </div>
        </div>
        <div v-else @click="goToRoute('cart')">
          <img
            :src="require('@/assets/images/general-icons/cart-icon.png')"
            alt="No photo"
          />
          <div v-if="getTotalPrice">{{ getTotalPrice }} грн</div>
        </div>
      </div>
    </div>
    <div class="store-navigation">
      <div class="clothing-menu" @click="goToRoute('allProducts')">
        <h3>Новинки</h3>
      </div>
      <div class="clothing-menu" @click="goToRoute('trousers')">
        <h3>Одяг</h3>
      </div>
      <div class="foot-wear-menu" @click="onGoToProductList('foot-wear')">
        <h3>Взуття</h3>
      </div>
      <div class="combat-gear-menu" @click="onGoToProductList('combat-gear')">
        <h3>Спорядження</h3>
      </div>
      <div class="rucksacks-bags-menu" @click="rucksacks - bags('')">
        <h3>Рюкзаки & Cумки & Баули</h3>
      </div>
      <div class="rucksacks-bags-menu" @click="rucksacks - bags('')">
        <h3>Тактичні & балістичні окуляри</h3>
      </div>
      <div class="rucksacks-bags-menu" @click="rucksacks - bags('')">
        <h3>Розпродаж</h3>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyCartPopUp from "@/components/EmptyCartPopUp";

import { mapGetters } from "vuex";
export default {
  name: "HeaderOfPage",

  components: {
    EmptyCartPopUp,
  },

  data() {
    return {
      isShowPopUp: false,
    };
  },

  computed: {
    ...mapGetters("productsList", ["updateSearchText"]),
    ...mapGetters("cartList", ["getTotalPrice"]),
  },
  methods: {
    showEmptyCartPopUp() {
      this.isShowPopUp = true;
    },
    changeVisible() {
      console.log(this.isShowPopUp);
      this.isShowPopUp = false;
      console.log(this.isShowPopUp);
    },

    goToRoute(routName) {
      this.$router.push({
        name: routName,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: rgb(208, 208, 187);
}
.authorization-block {
  background-color: rgb(142, 108, 67);
}
.flex-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  .logo-images-container {
    &:hover {
      cursor: pointer;
    }
    img {
      width: 400px;
    }
  }
  .cart-container {
    // position: relative;
    img {
      width: 60px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
.store-navigation {
  background-color: rgb(98, 99, 37);

  text-align: center;
  display: flex;
  text-align: center;
  div {
    padding: 10px 30px;
    &:hover {
      cursor: pointer;
    }

    &:hover {
      background-color: rgb(135, 121, 102);
    }
  }
}
p {
  text-align: right;
}

input {
  border: 2px solid rgb(143, 105, 55);
  font-size: 20px;
  height: 50px;
  width: 380px;
  border-radius: 10px;
  margin: 0px 0px 100px 0px auto;
}
button {
  background-color: rgb(143, 105, 55);
  font-size: 20px;
  height: 50px;
  width: 70px;
  border-radius: 10px;
  margin: 0px 0px 100px 0px auto;
}
.pop-up-container {
  width: 400px;
  height: 400px;
  background-color: white;
  box-shadow: 0px 0px 10px 1px black;
  position: absolute;
  position: fixed;
  z-index: 1;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
</style>
