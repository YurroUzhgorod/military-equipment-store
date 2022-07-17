import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

export default {
  namespaced: true,
  state() {
    return {
      productList: [],
      loading: false,
      error: false,
    };
  },

  getters: {
    getProductList: (state) => state.productList,
    getProductById: (state) => (prodId) =>
      state.productList.find((item) => item._id === prodId),

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },

  mutations: {
    setProductList(state, products) {
      state.productList = products;
    },

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
  },

  actions: {
    loadProducts({ commit }, searchProductParams) {
      commit("setLoading", true);
      commit("setError", null);

      axios
        .get(apiEndpoints.products.readList, {
          params: {
            title: searchProductParams.title,
            category: searchProductParams.category,
            sub_category: searchProductParams.subCategory,
            manufacturer: searchProductParams.manufacturer,
            minPrice: searchProductParams.minPrice,
            maxPrice: searchProductParams.maxPrice,

            sortRule: searchProductParams.sortRule,

            pageNumber: searchProductParams.pageNumber,
          },
        })
        .then((res) => res.data)
        .then((resData) => {
          if (resData.success) commit("setProductList", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {
          commit("setError", err);
        })
        .finally(() => commit("setLoading", false));
    },

    //--------------------------------------------------------------------------------------------------------
    loadProductsIncludes({ commit }, searchProductParams) {
      commit("setLoading", true);
      commit("setError", null);
      axios
        .get(apiEndpoints.products.readProdInclude, {
          params: {
            title: searchProductParams,
          },
        })
        .then((res) => res.data)
        .then((resData) => {
          if (resData.success) commit("setProductList", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {
          commit("setError", err);
        })
        .finally(() => commit("setLoading", false));
    },
    //--------------------------------------------------------------------------------------------------------

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
            console.log(resData.data);
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
          .then((res) => res.data)
          .then((resData) => {
            if (resData.success) resolve(resData.data);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            commit("setError", err);
            reject(err);
          })
          .finally(() => commit("setLoading", false));
      });
    },

    deleteProduct({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      new Promise((resolve, reject) => {
        axios
          .delete(apiEndpoints.products.delete, { data: { id } })
          .then((res) => res.data)
          .then((resData) => {
            if (resData.success) {
              commit("deleteProductFromList", id);
              resolve(true);
            } else throw new Error("Delete failed!");
          })
          .catch((err) => {
            commit("setError", err);
            reject(err);
          })
          .finally(() => commit("setLoading", false));
      });
    },
  },
};
