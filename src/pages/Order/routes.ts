import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/',
  component: () => import('./Layout.vue'),
  redirect: { name: 'order.page' },
  children: [
    {
      path: 'order',
      name: 'order.page',
      component: () => import('./Index.vue'),
    },
    // {
    //   path: `food/order/:id`, 
    //   name: 'set.order.page',
    //   component: () => import('@/pages/Foods/Orders.vue'),
    // }
  ],
}

export default route
