import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/registerSection.vue")
    },
    {
      path: "/",
      redirect: "home"
    },
    {
      path: "/client",
      name: "client",
      component: () => import("../views/clientSection.vue")
    }
  ]
})

export default router
