import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

//---------------------------
axios.interceptors.request.use(function (config) {
  const isAuthenticated = store.getters["auth/isAuthenticated"]();
  if (isAuthenticated) {
    config.headers["Authorization"] =
      "Bearer " + store.getters["auth/getAccessToken"]();
  } else {
    config.headers["Authorization"] = null;
  }
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      router.push({ path: "/login" });
    }
    return Promise.reject(error);
  }
);
// // ---------------------------
router.beforeEach((to, from, next) => {
  let check =
    !store.getters["auth/isAuthenticated"]() &&
    ["/order-form"].includes(to.path);

  if (check) {
    // Недопускаємо до захищених роутів, якщо немає токена

    next({ path: "/login" });
    return;
  } else {
    next();
  }
});
//---------------------------

createApp(App).use(router).use(store).use(vuetify).mount("#app");
