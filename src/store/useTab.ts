import router from '@/router';
import { defineStore } from 'pinia';

/**
 * 标签页
 */
export const useTabStore = defineStore('tab', {
    state: () => ({
        /** 标签页 */
        tabs: [] as { path: string; name: string }[],
        /** 当前激活的标签页 */
        active: { path: '', name: '' },
    }),
    actions: {
        /**
         * 设置标签页
         * @param tabs 标签页
         */
        gotoTab(tab: { path: string; name: string }) {
            if (tab.path === '/') {
                return;
            }
            if (tab.path === this.active.path) {
                return;
            }
            if (this.tabs.every(item => item.path !== tab.path)) {
                this.tabs.push(tab);
            }
            this.active = tab;
            router.push(tab.path);
        },
        /**
         * 删除标签页
         * @param path 标签页路由路径
         */
        removeTab(path: string) {
            if (this.tabs.length === 1) {
                return;
            }
            let index = this.tabs.findIndex(item => item.path === path);
            this.tabs.splice(index, 1);
            if (this.active.path !== path) {
                return;
            }
            if (index === this.tabs.length) {
                index--;
            }
            this.active = this.tabs[index];
            router.push(this.active.path);
        },
        /**
         * 清空标签页
         */
        clearTab() {
            this.tabs = this.tabs.filter(item => item.path === this.active.path);
        },
    },
});
