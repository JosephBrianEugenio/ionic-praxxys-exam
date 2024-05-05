import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/',
  component: () => import('./Layout.vue'),
  redirect: { name: 'points.page' },
  children: [
    {
      path: 'points',
      name: 'points.page',
      component: () => import('./Index.vue'),
    }
  ],
}

export default route
