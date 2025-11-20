import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/posts',
    name: 'PostList',
    component: () => import('@/pages/PostListPage.vue')
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: () => import('@/pages/PostDetailPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router