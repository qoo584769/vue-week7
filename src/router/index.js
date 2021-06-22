import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/dashboard/admin.vue'),
    children: [
      {
        path: 'product-list',
        name: 'admin-product-list',
        component: () => import('../components/dashboard/admin-product-list.vue'),
      },
      {
        path: 'order-list',
        name: 'admin-order-list',
        component: () => import('../components/dashboard/admin-order-list.vue'),
      },
      {
        path: 'coupon-list',
        name: 'admin-coupon-list',
        component: () => import('../components/dashboard/admin-coupon-list.vue'),
      },
      {
        path: 'article-list',
        name: 'admin-article-list',
        component: () => import('../components/dashboard/admin-article-list.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
