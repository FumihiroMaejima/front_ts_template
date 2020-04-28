import AdminPage from "@/components/pages/AdminPage.vue";
import NotFoundPage from "@/components/pages/NotFoundPage.vue";
import { RouteConfig } from "vue-router";

export const adminRoute: Array<RouteConfig> = [
  {
    path: "/admin",
    name: "adminPage",
    component: AdminPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    name: "notFound",
    component: NotFoundPage
  }
];
