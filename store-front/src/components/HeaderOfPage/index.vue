<template>
  <div class="header-container">
    <div class="authorization-block">
      <router-link v-if="!isAuthenticated()" to="/login">
        увійдіть
      </router-link>
      <span v-if="!isAuthenticated()"> або </span>

      <router-link v-if="!isAuthenticated()" to="/signup">
        зареєструйтесь
      </router-link>
      <div v-if="isAuthenticated()">
        <span>
          <span class="user-name">{{ getUserName }}</span> </span
        >,
        <button class="log-out-btn" @click="onLogout">хочете вийти?</button>
      </div>
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
          v-model="searchProdTitle"
        />
        <button @click="onSearchProduct(searchProdTitle)">
          <img
            :src="require('@/assets/images/general-icons/search-icon.webp')"
            alt="no photo"
          />
        </button>
      </div>
      <div class="icons-block-container">
        <div class="contact-us-container">
          <call-back-pop-up />
        </div>

        <div class="favorite-items-container" @click="onGoToFavoriteProducts">
          <img
            :class="{ 'favorite-list-length': getFavoriteList.length }"
            :src="require('@/assets/images/general-icons/bookmark.svg')"
            alt="no photo"
          />
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

        <div
          class="add-new-product"
          v-if="getUserStatus()"
          @click="onGoToAddProductRoute"
        >
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
      searchProdTitle: "",
    };
  },

  computed: {
    ...mapGetters("cartList", ["getTotalPrice"]),
    ...mapGetters("auth", ["isAuthenticated", "getUserStatus", "getUserName"]),
    ...mapGetters("favoriteList", ["getFavoriteList"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("products", ["loadProducts", "loadProductsIncludes"]),

    onGoToFavoriteProducts() {
      this.$router.push({ name: "favorite" });
    },

    onLogout() {
      this.logout();
      this.$router.push({ name: "homePage" });
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

    async onSearchProduct(searchText) {
      await this.loadProductsIncludes(searchText);
      this.$router.push({
        name: "products",
        params: {
          category: searchText,
        },
      });
      this.searchProdTitle = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
