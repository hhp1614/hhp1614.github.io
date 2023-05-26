import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // 首页
  { path: '/', component: () => import('../views/Home.vue') },
  // 工具箱
  { path: '/toolbox', component: () => import('../views/toolbox/Layout.vue') },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
