import { createRouter, createWebHistory } from 'vue-router'
import LayoutWrapper from '@/layouts/LayoutWrapper.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import BasketView from '../views/BasketView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayoutWrapper',
      component: LayoutWrapper
    },
    {
      path: '/home',
      name: 'homeView',
      component: HomeView
    },
    {
      path: '/login',
      name: 'loginView',
      component: LoginView
    },
    {
      path:'/basket',
      name: 'basketView',
      component: BasketView
    }
  ]
})

export default router
