import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "ProfileCard",
  //   component: () => import("../components/ProfileCard.vue"),
  //   meta: { transition: "fade" },
  // },
  {
    path: "/",
    name: "WelcomePage",
    component: () => import("../components/WelcomePage.vue"),
  },
  {
    path: "/HomePage",
    name: "Homepage",
    component: () => import("../components/HomePage.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory("portfolio-vue"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return document
        .querySelector(to.hash)
        .scrollIntoView({ behavior: "smooth" });
    } else {
      return savedPosition || { x: 0, y: 0 };
    }
  },
});

export default router;
