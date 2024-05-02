import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/',
  component: () => import('../../pages/Auth/Layout.vue'),
  redirect: { name: 'splash-screen' },
  children: [
    {
      path: '',
      name: 'splash-screen',
      component: () => import('./Index.vue'),
    },
    {
      path: '/login',
      name: 'auth',
      component: () => import('./LoginPage.vue'),
    }
  ],
}

export default route
