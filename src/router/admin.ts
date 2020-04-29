import AdminPage from "@/components/pages/AdminPage.vue";
import AdminAccountPage from "@/components/pages/AdminAccountPage.vue";
import AdminUserInfoPage from "@/components/pages/AdminUserInfoPage.vue";
import AdminUserLogPage from "@/components/pages/AdminUserLogPage.vue";
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
    path: "/admin/account",
    name: "AdminAccountPage",
    component: AdminAccountPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/userinfo",
    name: "AdminUserInfoPage",
    component: AdminUserInfoPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/userlog",
    name: "AdminUserLogPage",
    component: AdminUserLogPage,
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
