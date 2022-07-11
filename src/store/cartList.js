import { v4 as uuidv4 } from "uuid";

export default {
  namespaced: true,

  state: () => ({
    cartList: [],
  }),

  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {
    getCartList: (state) => state.cartList,
    getTotalPrice: (state, getters, rootState, rootGetters) =>
      state.cartList.reduce((prevSum, cartItem) => {
        const product = rootGetters["products/getProductList"].find(
          (item) => item._id === cartItem.prodId
        );
        return prevSum + product.price * cartItem.count;
      }, 0),
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    incrementCartItemCount(state, cartItemId) {
      const item = state.cartList.find((item) => item.id === cartItemId);
      item.count += 1;
    },
    decrementCartItemCount(state, cartItemId) {
      const item = state.cartList.find((item) => item.id === cartItemId);
      if (item.count > 1) item.count -= 1;
    },
    deleteCartItemCount(state, cartItemId) {
      state.cartList = state.cartList.filter((item) => item.id !== cartItemId);
    },
    addProduct(state, productId) {
      const product = state.cartList.find((item) => item.prodId === productId);
      if (product) product.count++;
      else
        state.cartList.push({
          id: uuidv4(),
          prodId: productId,
          count: 1,
        });
    },
  },
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {
    cartAction({ commit }, payload) {
      switch (payload.type) {
        case "increment":
          commit("incrementCartItemCount", payload.value);
          break;
        case "decrement":
          commit("decrementCartItemCount", payload.value);
          break;
        case "delete":
          commit("deleteCartItemCount", payload.value);
          break;
      }
    },
    addProductItem({ commit }, productId) {
      commit("addProduct", productId);
    },
  },
};
