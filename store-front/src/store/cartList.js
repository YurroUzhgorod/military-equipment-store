import { v4 as uuidv4 } from "uuid";

export default {
  namespaced: true,

  state: () => ({
    cartList: [],
  }),

  getters: {
    getCartList: (state) => state.cartList,

    getTotalPrice: (state) =>
      state.cartList.reduce((prevSum, cartItem) => {
        return prevSum + cartItem.prodPrice * cartItem.count;
      }, 0),
  },

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
    addProduct(state, productItem) {
      const product = state.cartList.find(
        (item) => item.prodId === productItem._id
      );
      if (product) product.count++;
      else
        state.cartList.push({
          id: uuidv4(),
          prodId: productItem._id,
          prodTitle: productItem.title,
          prodPrice: productItem.price,
          prodPhoto: productItem.photo,
          count: 1,
        });
    },
  },

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
