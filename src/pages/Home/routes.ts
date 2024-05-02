import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/',
  component: () => import('./Layout.vue'),
  redirect: { name: 'home.page' },
  children: [
    {
      path: 'home',
      name: 'home.page',
      component: () => import('@/pages/Home/Index.vue'),
    }
  ],
}

export default route
