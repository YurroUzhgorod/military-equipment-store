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
          <a href="https://www.facebook.com/">
            <img
              :src="
                require('@/assets/images/social-networks- icon/fb-logo.png')
              "
              alt="No photo"
            />
          </a>
        </div>
        <div class="logo-images-container">
          <a href="https://www.instagram.com/">
            <img
              :src="
                require('@/assets/images/social-networks- icon/instagram-logo.png')
              "
              alt="No photo"
            />
          </a>
        </div>
        <div class="logo-images-container">
          <a href="https://web.telegram.org/k/">
            <img
              :src="
                require('@/assets/images/social-networks- icon/telegram-logo.png')
              "
              alt="No photo"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="about">
      <h3>Підпишіться на нашу розсилку</h3>
      <span>
        Будьте першими, хто дізнається про новинки та ексклюзивні пропозиції
      </span>
      <label>
        <input type="text" placeholder="  Вкажіть адрес електронної пошти" />
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
  background-color: rgb(208, 208, 187);
  display: flex;
  justify-content: space-between;
  input {
    width: 100%;
    border: 2px solid rgb(143, 105, 55);
    height: 40px;
    border-radius: 5px;
  }

  p:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  /* selected link */
  p:active {
    color: rgb(98, 99, 37);
  }
  .about {
    margin: 10px;
    width: 300px;
  }
  .flex-container {
    display: flex;

    img {
      width: 35px;
      height: 35px;
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
