import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/pages/HomePage";
// import EditPage from "@/pages/EditPage";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  // { path: "/edit/:id?", component: EditPage, name: "edit" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
