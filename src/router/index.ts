import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes:Array<RouteRecordRaw>=[
  {
    path: '/repository',
    name: 'repository',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/RepositoryApp.vue'),
    children:[
      {
        path: 'repositoryHome',
        name: 'repositoryHome',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/RepositoryApp.vue')
      },
      {
        path: 'overview',
        name: 'overview',
        component: HomeView
      },
      {
        path: 'repositories',
        name: 'repositories',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
      },

      {
        path: 'packages',
        name: 'packages',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/RepositoryApp.vue')
      },
      {
        path: 'stars',
        name: 'stars',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/RepositoryApp.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
