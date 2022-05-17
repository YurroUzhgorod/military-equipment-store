<template>
  <div class="container">
    <div class="authorization">
      <p>Зайдіть або створіть аккаунт</p>
    </div>
    <div class="flex-container">
      <div class="logo-images-container">
        <img src="@/assets/images/store-logo.jpeg" alt="" />
      </div>

      <div class="search-product-container">
        <input type="text" placeholder="search" />
      </div>

      <div class="cart-images-container">
        <img src="@/assets/images/basket.jpeg" alt="" />
      </div>
    </div>
    <div class="store-navigation">
      <div class="clothing-menu" @click="goToRoute('productsList')">
        <h3>Одяг</h3>
      </div>
      <div class="foot-wear-menu" @click="goToRoute('foot-wear')">
        <h3>Взуття</h3>
      </div>
      <div class="combat-gear-menu" @click="goToRoute('combat-gear')">
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
    goToRoute(routeName) {
      this.$router.push({
        name: routeName,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: beige;
  padding: 0px 10px;
}
.flex-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;

  img {
    width: 100px;
  }
}
.store-navigation {
  background-color: antiquewhite;
  text-align: center;
  display: flex;
  justify-content: space-around;
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
