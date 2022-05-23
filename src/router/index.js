import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";

const routes = [
  { path: "/", component: HomePage, name: "homePage" },
  {
    path: "/all-product/:category?,",
    component: ProductPage,
    name: "allProductPage",
  },
  {
    path: "/cart",
    component: CartPage,
    name: "cart",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
