import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import( '../pages/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
