import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/main/Home.vue'),
      },
      {
        path: '/photo',
        name: 'photo',
        component: () => import('@/views/main/Photo.vue'),
      },
      {
        path: '/games',
        name: 'games',
        component: () => import('@/views/main/Games.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active-router',
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
