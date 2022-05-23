<template>
  <div class="container">
    <div class="authorization">
      <p>Зайдіть або створіть аккаунт</p>
    </div>
    <div class="flex-container">
      <div class="logo-images-container">
        <img :src="require('@/assets/images/store-logo.jpeg')" alt="No photo" />
      </div>

      <div class="search-product-container">
        <input type="text" placeholder="search" />
      </div>

      <div class="cart-images-container" @click="goToRoute('cart')">
        <img :src="require('@/assets/images/basket.jpeg')" alt="No photo" />
      </div>
    </div>
    <div class="store-navigation">
      <div class="clothing-menu" @click="goToRoute('allProductPage')">
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
  padding: 0px 10px;
}
.flex-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  .cart-images-container {
    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 100px;
  }
}
.store-navigation {
  background-color: antiquewhite;
  text-align: center;
  display: flex;
  justify-content: space-between;
  div {
    padding: 3px;

    border-radius: 8px;
    &:hover {
      background-color: rgb(135, 121, 102);
    }
  }
}
p {
  text-align: right;
}
</style>
