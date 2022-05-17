<template>
  <div class="container">
    <div class="authorization">
      <p>Sign In or Create Account</p>
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
    <div class="store-navigation">There will be store navigation</div>
  </div>
</template>

<script>
export default {
  name: "HeaderOfPage",
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
}
p {
  text-align: right;
}
</style>
