import LoginPage from "@/components/pages/LoginPage.vue";
import { RouteConfig } from "vue-router";

export const publicRoute: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: LoginPage
  }
];
