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
    path: '/home/:page',
    name: 'HomePage',
    // query: { page: this.params.page },
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
    path: '/tools',
    name: 'Tools',
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
    component: () => import( '../pages/admin/Index'),
    children:[
      {
        path: '',
        name: 'AdminHome',
        component: () => import( '../pages/admin/Home')
      },
      {
        path: 'blogs',
        name: 'AdminBlogs',
        component: () => import( '../pages/admin/Blogs')
      }, {
        path: '/blogs/input',
        name: 'AdminBlogsInput',
        component: () => import( '../pages/admin/BlogsInput')
      }, {
        path: 'types',
        name: 'AdminTypes',
        component: () => import( '../pages/admin/Types')
      }, {
        path: 'tags',
        name: 'AdminTags',
        component: () => import( '../pages/admin/Tags')
      },{
        path: 'comments',
        name: 'AdminComments',
        component: () => import( '../pages/admin/Comments')
      },
      {
        path: 'clipboards',
        name: 'AdminClipboards',
        component: () => import( '../pages/admin/Clipboards')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../pages/admin/Login.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import( '../components/test')
  },{
    path: '/test2',
    name: 'Test2',
    component: () => import( '../components/test2')
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
  routes,
  linkActiveClass:"active"
})

export default router
