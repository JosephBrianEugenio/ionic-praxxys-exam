import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/',
  component: () => import('@/pages/Foods/Layout.vue'),
  redirect: { name: 'food.page' },
  children: [
    {
      path: 'food',
      name: 'food.page',
      component: () => import('@/pages/Foods/Index.vue'),
    },
    {
      path: `food/order/:id`, 
      name: 'set.order.page',
      component: () => import('@/pages/Foods/Orders.vue'),
    }
  ],
}

export default route
