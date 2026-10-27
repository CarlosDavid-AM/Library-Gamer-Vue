import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/GamesView.vue')
    },
    {
      path: '/add',
      name: 'AddGame',
      component: () => import('../views/FormGameView.vue')
    }
  ],
})

export default router
