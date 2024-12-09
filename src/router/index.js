import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test/TestView.vue'),
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/result/ResultView.vue'),
    },
  ],
})

export default router
