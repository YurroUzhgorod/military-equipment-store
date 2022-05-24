import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import EditPage from "@/pages/EditPage";

const routes = [
  { path: "/", component: HomePage, name: "homePage" },

  {
    path: "/all-products",
    component: ProductPage,
    name: "allProducts",
  },
  {
    path: "/cart",
    component: CartPage,
    name: "cart",
  },
  { path: "/edit/:id?", component: EditPage, name: "edit" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
