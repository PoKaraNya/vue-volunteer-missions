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
      name: 'map',
      component: () => import('../layouts/MapLayout.vue'),
      children: [
        {
          path: '',
          name: 'map',
          component: () => import('../views/MapView.vue'),
        },
      ],
    },
  ],
});

export default router;
