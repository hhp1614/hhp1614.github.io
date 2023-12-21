import { createRouter, createWebHashHistory, RouteComponent, RouteRecordRaw } from 'vue-router';
import toolbox from './toolbox';
import admin from './admin';
import playground from './playground';

/**
 * 根据 Pages 生成路由
 * @param path 路径
 * @param pages 页面
 * @param component Layout 组件
 */
function getRoutes(path: string, pages: Pages, component: RouteComponent) {
    let redirect = '';

    const children = pages.reduce((prev, curr, i) => {
        curr.children = curr.children.map((item, j) => {
            item.path = `${path}/${item.name}`;
            if (i === 0 && j === 0) {
                redirect = item.path;
            }
            return item;
        });
        return [...prev, ...(curr.children as RouteRecordRaw[])];
    }, [] as RouteRecordRaw[]);

    return { path, redirect, component, children };
}

/**
 * 所有路由
 */
const routes: RouteRecordRaw[] = [
    // 首页
    { path: '/', component: () => import('@/views/Home.vue') },
    // 工具箱
    getRoutes('/toolbox', toolbox, () => import('@/views/toolbox/Layout.vue')),
    // 演练场
    getRoutes('/playground', playground, () => import('@/views/playground/Layout.vue')),
];

if (window.isLocal) {
    // 管理后台
    routes.push(getRoutes('/admin', admin, () => import('@/views/admin/Layout.vue')));
}

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
