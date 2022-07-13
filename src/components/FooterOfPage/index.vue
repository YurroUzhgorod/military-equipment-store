<template>
  <div class="footer-content-container">
    <div class="about">
      <h3>Інформація :</h3>
      <p @click="onGoToRoute('about')">Про Компанію</p>
      <p @click="onGoToRoute('contacts')">Контакти</p>
      <p @click="onGoToRoute('privacy-policy')">Адреси наших магазинів</p>
      <p @click="onGoToRoute('terms&condition')">Графік роботи магазинів</p>
    </div>
    <div class="help">
      <h3>Покупцям:</h3>
      <p>Оплата і доставка</p>
      <p>Особистий кабінет</p>
      <p>Карта сайту</p>
      <p>Найчастіші питання</p>
    </div>

    <div class="social-networks-payments-container">
      <h3>Слідкуйте за нами в соціальних мережах:</h3>
      <div class="logo-img-wrapper">
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
      <div class="payment-container">
        <img :src="require('@/assets/images/payment-logos.svg')" alt="" />
      </div>
    </div>

    <div class="news-letter-sing-in">
      <h3>Підпиcуйтесь на розсилку:</h3>
      <span>
        Будьте першими, хто дізнається про новинки та ексклюзивні пропозиції
      </span>

      <div class="news-letter-input-wrapper">
        <input type="email" placeholder="  Вкажіть адрес електронної пошти" />

        <div class="news-letter-confirm-button">
          <img
            :src="require('@/assets/images/general-icons/confirm-icon.png')"
            alt="No photo"
          />
        </div>
      </div>
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

<style lang="scss" scoped></style>
