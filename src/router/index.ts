import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";
import { publicRoute } from "./public";
import { adminRoute } from "./admin";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = publicRoute.concat(adminRoute);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
