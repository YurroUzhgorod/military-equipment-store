import { createStore } from "vuex";

import productsList from "./productsList";
import cartList from "./cartList";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    productsList,
    cartList,
  },
});
