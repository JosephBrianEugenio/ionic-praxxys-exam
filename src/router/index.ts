import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import AuthRoutes from '@/pages/Auth/routes'
import HomeRoutes from '@/pages/Home/routes'

const routes: Array<RouteRecordRaw> = []
routes.push(AuthRoutes)
routes.push(HomeRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
