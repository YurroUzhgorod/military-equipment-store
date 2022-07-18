import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import ProductItemInfo from "@/pages/ProductItemInfo";
import CartPage from "@/pages/CartPage";
import EditPage from "@/pages/EditPage";
import InfoPage from "@/pages/InfoPage";
import ProductsSizePage from "@/pages/ProductsSizePage";
import FavoriteListPage from "@/pages/FavoriteListPage";
import OrderPage from "@/pages/OrderPage";

import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";

const routes = [
  { path: "/", component: HomePage, name: "homePage" },

  { path: "/login", component: LoginPage, name: "login" },
  { path: "/signup", component: SignupPage, name: "signup" },

  {
    path: "/products/:category/:subCategory?",
    component: ProductPage,
    name: "products",
  },

  {
    path: "/:id",
    component: ProductItemInfo,
    name: "prodItemInfo",
  },

  {
    path: "/cart",
    component: CartPage,
    name: "cart",
  },

  {
    path: "/favorite-bookmarks",
    component: FavoriteListPage,
    name: "favorite",
  },

  { path: "/edit/:id?", component: EditPage, name: "edit" },

  { path: "/info/:source?", component: InfoPage, name: "info" },
  {
    path: "/info/products-sizes",
    component: ProductsSizePage,
    name: "productsSize",
  },
  { path: "/order-form", component: OrderPage, name: "orderForm" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
