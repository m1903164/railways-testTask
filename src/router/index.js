import { createRouter, createWebHistory } from 'vue-router'
import LayoutWrapper from '@/layouts/LayoutWrapper.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import BasketView from '../views/BasketView.vue'

import { isUserAuth } from './authGuard.js'

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
      component: HomeView,
      beforeEnter: isUserAuth
    },
    {
      path: '/login',
      name: 'loginView',
      component: LoginView
    },
    {
      path:'/basket',
      name: 'basketView',
      component: BasketView,
      beforeEnter: isUserAuth
    }
  ]
})

export default router
