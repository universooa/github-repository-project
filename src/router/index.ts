import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";

const routes:Array<RouteRecordRaw>=[
  {
    path: '/repository',
    name: 'repository',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../App.vue')
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/repositories',
    name: 'repositories',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/packages',
    name: 'packages',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/stars',
    name: 'stars',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/HomeView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
