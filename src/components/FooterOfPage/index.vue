<template>
  <div class="container">
    <div class="about">
      <h3>About:</h3>
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
    </div>
    <div class="help">
      <h3>Help:</h3>
      <p>Delivery & Returns</p>
      <p>Cookie Policy</p>
      <p>Site Map</p>
      <p>FAQs</p>
    </div>

    <div class="social">
      <h3>Social</h3>
      <div class="flex-container">
        <div class="logo-images-container">
          <img :src="require('@/assets/images/social-logo/fb-logo.png')" alt="No photo" />
        </div>
        <div class="logo-images-container">
          <img :src="require('@/assets/images/social-logo/instagram-logo.jpeg')" alt="No photo" />
        </div>
        <div class="logo-images-container">
          <img :src="require('@/assets/images/social-logo/telegram-logo.png')" alt="No photo" />
        </div>
      </div>
    </div>

    <div class="about">
      Sign up to our newsletter
      <br />
      <label>
        <input type="text" placeholder="Enter your email adress" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterOfPage",
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(208, 208, 187);
  display: flex;
  justify-content: space-between;
}
.about {
  padding: 10px;
}
.flex-container {
  display: flex;

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
  .about {
    h3 {
      text-align: center;
    }
  }
}
</style>
