import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

export default {
  namespaced: true,
  state() {
    return {
      searchText: "",
      productList: [],
      loading: false,
      error: false,
    };
  },
  // функції, які здійснюють зчитування значень з стейта і які ми можемо використовувати у компонентах
  getters: {
    getProductList: (state) => state.productList,
    getProductById: (state) => (prodId) =>
      state.productList.find((item) => item._id === prodId),

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    setProductList(state, products) {
      state.productList = products;
    },
    // addProductToList(state, product) {
    //   state.books.push(product);
    // },
    deleteProductFromList(state, productId) {
      state.productList = state.productList.filter(
        (product) => product._id !== productId
      );
    },

    setLoading(state, data) {
      state.loading = data;
    },
    setError(state, data) {
      state.error = data;
    },
    updateSearchText(state, newText) {
      state.searchText = newText;
    },
  },

  // розділ, де описуємо функції, які викликаємо у компонентах, якшо хочемо змінити стейт
  actions: {
    loadProducts({ commit }, { category: category, type: type }) {
      commit("setLoading", true);
      commit("setError", null);
      //Запит на сервер
      axios
        .get(apiEndpoints.products.readList, {
          params: { category: category, type: type },
        }) //Асинхронна дія) //Асинхронна дія //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit("setProductList", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {
          //Якщо погано
          commit("setError", err);
        })
        .finally(
          //Завжди
          () => commit("setLoading", false)
        );
    },

    addProduct({ commit }, product) {
      commit("setLoading", true);
      commit("setError", null);

      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.products.add, product)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },

    updateProduct({ commit }, product) {
      commit("setLoading", true);
      commit("setError", null);

      return new Promise((resolve, reject) => {
        axios
          .put(apiEndpoints.products.update, product)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            console.log("бек відправив помилку");
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },

    getProductById({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .get(apiEndpoints.products.getProductById(id))
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(resData.data);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },

    deleteProduct({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      new Promise((resolve, reject) => {
        axios
          .delete(apiEndpoints.products.delete, { data: { id } })
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) {
              commit("deleteProductFromList", id);
              resolve(true);
            } else throw new Error("Delete failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },

    setSearchText({ commit }, inputText) {
      commit("updateSearchText", inputText);
    },
  },
};
