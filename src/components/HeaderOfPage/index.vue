<template>
  <div class="container">
    <div class="authorization-block">
      <p>Зайдіть або створіть аккаунт</p>
    </div>
    <div class="flex-container">
      <div class="logo-images-container" @click="goToRoute('homePage')">
        <img :src="require('@/assets/images/store-logo.webp')" alt="No photo" />
      </div>

      <div class="search-product-container">
        <input type="text" placeholder="Пошук " class="block-search-input" />
      </div>

      <div class="cart-images-container" @click="goToRoute('cart')">
        <img :src="require('@/assets/images/basket.jpeg')" alt="No photo" />
      </div>
    </div>
    <div class="store-navigation">
      <div class="clothing-menu" @click="goToRoute('allProducts')">
        <h3>Всі товари</h3>
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
        <h3>Рюкзаки&Сумки</h3>
      </div>
      <div class="eye-menu" @click="goToRoute"><h3>Окуляри</h3></div>
      <div class="brands-menu" @click="goToRoute"><h3>Бренди</h3></div>
      <div class="color-menu"><h3>Камуфляж</h3></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderOfPage",

  methods: {
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
      width: 200px;
    }
  }
  .cart-images-container {
    img {
      width: 50px;
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
  border: 1px solid rgb(143, 105, 55);
  font-size: 20px;
  height: 50px;
  width: 380px;
  border-radius: 10px;
  margin: 0px 0px 100px 0px auto;
}
</style>
