import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/home' },
    // 首页
    { path: '/home', component: () => import('../views/Home.vue') },
    // 工具箱
    { path: '/toolbox', component: () => import('../views/Toolbox.vue') }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
