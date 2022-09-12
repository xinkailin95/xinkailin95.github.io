import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../components/Home.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../components/About.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../components/Contact.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active-router',
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
