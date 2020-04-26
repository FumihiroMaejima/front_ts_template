import NotFoundPage from "@/components/pages/NotFoundPage.vue";
import { RouteConfig } from "vue-router";

export const adminRoute: Array<RouteConfig> = [
  {
    path: "*",
    name: "notFound",
    component: NotFoundPage
  }
];
