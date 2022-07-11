import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import ProductItemInfo from "@/pages/ProductItemInfo";
import CartPage from "@/pages/CartPage";
import EditPage from "@/pages/EditPage";
import InfoPage from "@/pages/InfoPage";

const routes = [
  { path: "/", component: HomePage, name: "homePage" },

  {
    path: "/products/:category?/:subCategory?",
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

  { path: "/edit/:id?", component: EditPage, name: "edit" },

  { path: "/info/:source?", component: InfoPage, name: "info" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
