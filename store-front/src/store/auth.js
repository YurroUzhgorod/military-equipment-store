// import { createStore } from 'vuex'
import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

const store = {
  namespaced: true,
  state: {
    authData: JSON.parse(localStorage.getItem("authData")) || null,
    expiresAt: localStorage.getItem("expiresAt") || null,
    userStatusIsAdmin:
      JSON.parse(localStorage.getItem("userStatusIsAdmin")) || null,
    userName: "",
  },
  getters: {
    getUserStatus: (state) => () => {
      return state.userStatusIsAdmin;
    },

    isAuthenticated: (state) => () => {
      return state.authData && new Date().getTime() < state.expiresAt;
    },
    getAccessToken: (state) => () => {
      return state.authData && state.authData.access_token;
    },
    authorized: (state) =>
      state.authData && new Date().getTime() < state.expiresAt,

    getUserName: (state) => state.userName,
  },
  mutations: {
    setAuthData(state, { authData, expiresAt, isUserAdmin }) {
      state.authData = { ...authData };
      state.userStatusIsAdmin = isUserAdmin;
      state.expiresAt =
        expiresAt || state.authData.expires_in * 1000 + new Date().getTime();

      localStorage.setItem("authData", JSON.stringify(state.authData));
      localStorage.setItem("expiresAt", JSON.stringify(state.expiresAt));
      localStorage.setItem(
        "userStatusIsAdmin",
        JSON.stringify(state.userStatusIsAdmin)
      );
    },

    setUserName(state, UserName) {
      state.userName = UserName;
    },

    clearAuthData(state) {
      state.authData = null;
      state.expiresAt = null;
      state.userStatusIsAdmin = null;
      state.UserName = null;

      localStorage.removeItem("authData");
      localStorage.removeItem("expiresAt");
      localStorage.removeItem("userStatusIsAdmin");
    },
  },
  actions: {
    setAuthData({ commit }, { authData, expiresAt, isUserAdmin }) {
      commit("setAuthData", { authData, expiresAt, isUserAdmin });
    },

    signup({ commit }, { name, email, password, secretKey }) {
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.user.signup, { name, email, password, secretKey })
          .then(function () {
            resolve(true);
          })
          .catch((err) => {
            commit("clearAuthData");
            reject(err);
          });
      });
    },

    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.user.login, { email, password })
          .then((res) => res.data)
          .then((data) => {
            console.log("data axios login");
            commit("setUserName", data.user.authData.name);
            commit("setAuthData", { ...data.user });
            resolve(true);
          })
          .catch((err) => {
            commit("clearAuthData");
            reject(err);
          });
      });
    },

    logout({ commit, dispatch }) {
      commit("clearAuthData");
      dispatch("cartList/clearCartList", null, { root: true });
      dispatch("favoriteList/clearFavoriteList", null, { root: true });
    },
  },
};

export default store;
