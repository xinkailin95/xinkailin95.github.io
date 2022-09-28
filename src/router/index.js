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
        path: '/about',
        name: 'about',
        component: () => import('@/views/main/About.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/main/Contact.vue'),
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
