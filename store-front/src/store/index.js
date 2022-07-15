import { createStore } from "vuex";

import products from "./products";
import cartList from "./cartList";
import auth from "./auth";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cartList,
    auth,
  },
});
