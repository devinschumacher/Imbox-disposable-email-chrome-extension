import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../pages/Settings.vue')
    }
  ]
})

export default router
