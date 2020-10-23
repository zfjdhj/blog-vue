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
    path: '/types',
    name: 'Types',
    component: () => import( '../pages/Types.vue')
  },
  {
    path: '/tags',
    name: 'Tags',
    component: () => import( '../pages/Tags')
  },
    {
    path: '/archives',
    name: 'Archives',
    component: () => import( '../pages/Archives')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import( '../pages/admin/Login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../pages/admin/Login.vue')
  }, {
    path: '/admin/blogs',
    name: 'AdminBlogs',
    component: () => import( '../pages/admin/Blogs')
  }, {
    path: '/admin/blogs/input',
    name: 'AdminBlogsInput',
    component: () => import( '../pages/admin/BlogsInput')
  }, {
    path: '/admin/types',
    name: 'AdminTypes',
    component: () => import( '../pages/admin/Types')
  }, {
    path: '/admin/tags',
    name: 'AdminTags',
    component: () => import( '../pages/admin/Tags')
  },{
    path: '/admin/comments',
    name: 'AdminComments',
    component: () => import( '../pages/admin/Comments')
  },{
    path: '/admin/clipboards',
    name: 'AdminClipboards',
    component: () => import( '../pages/admin/Clipboards')
  },


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
