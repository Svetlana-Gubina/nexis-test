import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/HomeView.vue'),
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('../components/CreateView.vue'),
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: () => import('../components/EditView.vue'),
      props: (route) => ({
        id: route.params.id,
      }),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not found',
      component: () => import('../components/PageNotFound.vue'),
    },
  ],
  history: createWebHistory('/'),
});

export default router;
