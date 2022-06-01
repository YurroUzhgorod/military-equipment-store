<template>
  <div class="container">
    <div class="about">
      <h3>Інформація:</h3>
      <p @click="onGoToRoute('about')">About Us</p>
      <p @click="onGoToRoute('contacts')">Contact Us</p>
      <p @click="onGoToRoute('privacy-policy')">Privacy Policy</p>
      <p @click="onGoToRoute('terms&condition')">Terms & Conditions</p>
    </div>
    <div class="help">
      <h3>Покупцям:</h3>
      <p>Delivery & Returns</p>
      <p>Cookie Policy</p>
      <p>Site Map</p>
      <p>FAQs</p>
    </div>

    <div class="social-network-container">
      <h3>Слідкуйте за нами в соціальних мережах</h3>
      <div class="flex-container">
        <div class="logo-images-container">
          <img
            :src="require('@/assets/images/social-networks- icon/fb-logo.png')"
            alt="No photo"
          />
        </div>
        <div class="logo-images-container">
          <img
            :src="
              require('@/assets/images/social-networks- icon/instagram-logo.png')
            "
            alt="No photo"
          />
        </div>
        <div class="logo-images-container">
          <img
            :src="
              require('@/assets/images/social-networks- icon/telegram-logo.png')
            "
            alt="No photo"
          />
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

  methods: {
    onGoToRoute(routeParams) {
      this.$router.push({
        name: "info",
        params: {
          source: routeParams,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: rgb(208, 208, 187);
  display: flex;
  justify-content: space-between;
  p:hover {
  }
  /* unvisited link */
  p:link {
    color: green;
  }

  /* visited link */
  p:visited {
    color: green;
  }

  /* mouse over link */
  p:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  /* selected link */
  p:active {
    color: yellow;
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
}
</style>
