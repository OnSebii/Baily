import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import Stylesheet from '@/views/Stylesheet.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  { path: '/stylesheet', name: 'Stylesheet', component: Stylesheet },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active',
});

export default router;
