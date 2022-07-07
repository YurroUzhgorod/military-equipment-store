import { createStore } from "vuex";

import products from "./products";
import cartList from "./cartList";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cartList,
  },
});
