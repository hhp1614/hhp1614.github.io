import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { toolboxPages } from './pages';

let toolboxRedirect = '';

/**
 * toolbox 路由配置
 */
const toolboxRoutes: RouteRecordRaw[] = toolboxPages.reduce((prev, curr, i) => {
    curr.children = curr.children.map((item, j) => {
        item.path = `/toolbox/${item.name}`;
        if (i === 0 && j === 0) {
            toolboxRedirect = item.path;
        }
        return item;
    });
    return [...prev, ...(curr.children as RouteRecordRaw[])];
}, [] as RouteRecordRaw[]);

/**
 * 所有路由
 */
const routes: RouteRecordRaw[] = [
    // 首页
    { path: '/', component: () => import('@/views/Home.vue') },
    // 工具箱
    {
        path: '/toolbox',
        component: () => import('@/views/toolbox/Layout.vue'),
        children: toolboxRoutes,
        redirect: toolboxRedirect,
    },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
