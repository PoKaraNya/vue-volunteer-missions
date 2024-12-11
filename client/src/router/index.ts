import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
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
          path: '/',
          name: 'map',
          component: () => import('../views/MapView.vue'),
        },
      ],
    },
  ],
});

export default router;
