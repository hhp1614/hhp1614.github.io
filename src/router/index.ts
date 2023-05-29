import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { pages } from './pages'

let toolboxRedirect = ''

const toolboxRoutes: RouteRecordRaw[] = pages.reduce((prev, curr, i) => {
  curr.children = curr.children.map((item, j) => {
    item.path = `/toolbox/${item.name}`
    if (i === 0 && j === 0) {
      toolboxRedirect = item.path
    }
    return item
  })
  return [...prev, ...(curr.children as RouteRecordRaw[])]
}, [] as RouteRecordRaw[])

const routes: RouteRecordRaw[] = [
  // 首页
  { path: '/', component: () => import('@/views/Home.vue') },
  // 工具箱
  { path: '/toolbox', component: () => import('@/views/toolbox/Layout.vue'), children: toolboxRoutes, redirect: toolboxRedirect },
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router
