import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=> import("@/view/home/index.vue")
    },
  ]
})

export default router
