<template>
  <div class="header-container">
    <div class="authorization-block">
      <router-link v-if="!isAuthenticated()" to="/signup">
        <strong>Sign up</strong>
      </router-link>
      <router-link v-if="!isAuthenticated()" to="/login">
        <strong>Log in</strong>
      </router-link>
      <button v-if="isAuthenticated()" @click="onLogout">Log out</button>
    </div>
    <div class="header-content-container">
      <div class="logo-images-container" @click="goToRoute('homePage')">
        <img
          :src="require('@/assets/images/general-icons/store-logo.jpg')"
          alt="No photo"
        />
      </div>

      <div class="search-product-container">
        <input
          type="text"
          placeholder="  Я шукаю..."
          class="block-search-input"
          v-model="searchProd"
        />
        <button @click="onSearchProduct">
          <img
            :src="require('@/assets/images/general-icons/search-icon.webp')"
            alt="no photo"
          />
        </button>
      </div>
      <div class="test">
        <div class="contact-us-container">
          <call-back-pop-up />
        </div>

        <div class="cart-container">
          <div class="pop-up-cart-empty" v-if="getTotalPrice === 0">
            <img
              :src="require('@/assets/images/general-icons/cart-icon.png')"
              alt="No photo"
              @click="showEmptyCartPopUp"
            />
            <div class="cart-pop-up-container" v-if="isShowPopUp">
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
        <div class="add-new-product" @click="onGoToAddProductRoute">
          <button>Додати товар</button>
        </div>
      </div>
    </div>

    <div class="store-navigation-container">
      <menu-block />
    </div>
  </div>
</template>

<script>
import EmptyCartPopUp from "@/components/EmptyCartPopUp";
import CallBackPopUp from "@/components/CallBackPopUp";
import MenuBlock from "./MenuBlock";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HeaderOfPage",

  components: {
    EmptyCartPopUp,
    MenuBlock,
    CallBackPopUp,
  },

  data() {
    return {
      isShowPopUp: false,
      activeSubMenu: null,
      searchProd: "",
    };
  },

  computed: {
    ...mapGetters("productsList", ["updateSearchText"]),
    ...mapGetters("cartList", ["getTotalPrice"]),
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    onLogout() {
      this.logout();
      this.$router.push({ path: "/login" });
    },

    showEmptyCartPopUp() {
      this.isShowPopUp = true;
    },
    changeVisible() {
      this.isShowPopUp = false;
    },

    goToRoute(routName) {
      this.$router.push({
        name: routName,
      });
    },
    onGoToAddProductRoute() {
      this.$router.push({
        name: "edit",
      });
    },
    onSearchProduct() {},
  },
};
</script>

<style lang="scss" scoped></style>
