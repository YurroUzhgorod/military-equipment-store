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
        <input
          type="text"
          placeholder="  пошук"
          class="block-search-input"
          v-model="searchText"
        />
        <button @click="onSearchProduct">Найти</button>
      </div>
      <div class="cart-images-container">
        <div @click="goToRoute('cart')">
          <img
            :src="require('@/assets/images/general-icons/cart-icon.png')"
            alt="No photo"
          />
        </div>
        <div v-if="getTotalPrice">{{ getTotalPrice }} грн</div>
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
import { mapGetters } from "vuex";
export default {
  name: "HeaderOfPage",

  computed: {
    ...mapGetters("productsList", ["updateSearchText"]),
    ...mapGetters("cartList", ["getTotalPrice"]),

    changeSearchInputValue() {
      return this.updateSearchText(this.searchText);
    },
  },
  methods: {
    goToRoute(routName) {
      this.$router.push({
        name: routName,
      });
    },
  },
  // watch: {
  //   searchText(newValue) {},
  // },
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
  .cart-images-container {
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
  border: 1px solid rgb(143, 105, 55);
  background-color: rgb(143, 105, 55);
  font-size: 20px;
  height: 50px;
  width: 70px;
  border-radius: 10px;
  margin: 0px 0px 100px 0px auto;
}
</style>
