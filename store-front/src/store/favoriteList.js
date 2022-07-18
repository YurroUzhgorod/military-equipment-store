export default {
  namespaced: true,

  state: () => ({
    favoriteList: [],
  }),

  getters: {
    getFavoriteList: (state) => state.favoriteList,
  },

  mutations: {
    deleteItem(state, prodId) {
      state.favoriteList = state.favoriteList.filter(
        (item) => item._id !== prodId
      );
    },
    addItem(state, productItem) {
      state.favoriteList.push({
        ...productItem,
      });
    },
  },

  actions: {
    addProdToFavoriteList({ commit }, productId) {
      commit("addItem", productId);
    },

    deleteProdFromList({ commit }, productId) {
      commit("deleteItem", productId);
    },
  },
};
