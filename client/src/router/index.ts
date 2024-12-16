import { createRouter, createWebHistory } from 'vue-router';

const base = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/RegisterView.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/HomeLayout.vue'),
      children: [
        {
          path: '',
          name: 'map',
          component: () => import('../views/MapView.vue'),
        },
        {
          path: '/supply-centers',
          name: 'supply-centers',
          component: () => import('../views/SupplyCentersView.vue'),
        },
        {
          path: '/hot-places',
          name: 'hot-places',
          component: () => import('../views/HotPlacesView.vue'),
        }
      ],
    },
  ],
});

export default router;
