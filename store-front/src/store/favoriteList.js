export default {
  namespaced: true,

  state: () => ({
    favoriteList: JSON.parse(localStorage.getItem("favoriteList")) || {},
  }),

  getters: {
    getFavoriteList: (state) => state.favoriteList,
  },

  mutations: {
    deleteItem(state, prodId) {
      state.favoriteList = state.favoriteList.filter(
        (item) => item._id !== prodId
      );
      localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
    },
    addItem(state, productItem) {
      state.favoriteList.push({
        ...productItem,
      });
      localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
    },

    clearFavList(state) {
      state.favoriteList = [];
      localStorage.removeItem("favoriteList");
    },
  },

  actions: {
    addProdToFavoriteList({ commit }, productId) {
      commit("addItem", productId);
    },

    deleteProdFromList({ commit }, productId) {
      commit("deleteItem", productId);
    },
    clearFavoriteList({ commit }) {
      commit("clearFavList");
    },
  },
};
