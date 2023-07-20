import router from '@/router';
import { defineStore } from 'pinia';

type Tab = {
    path: string;
    name: string;
};

type Tabs = {
    toolbox: Tab[];
    admin: Tab[];
};

/**
 * 标签页
 */
export const useTabStore = defineStore('tab', {
    state: () => ({
        /** 标签页 */
        tabs: {
            toolbox: [],
            admin: [],
        } as Tabs,
        /** 当前激活的标签页 */
        active: { path: '', name: '' },
    }),
    actions: {
        /**
         * 设置标签页
         * @param key 标签组 key
         * @param tabs 标签页
         */
        gotoTab(key: keyof Tabs, tab: { path: string; name: string; }) {
            if (tab.path === '/') {
                return;
            }
            if (tab.path === this.active.path) {
                return;
            }
            if (this.tabs[key].every(item => item.path !== tab.path)) {
                this.tabs[key].push(tab);
            }
            this.active = tab;
            router.push(tab.path);
        },
        /**
         * 删除标签页
         * @param key 标签组 key
         * @param path 标签页路由路径
         */
        removeTab(key: keyof Tabs, path: string) {
            if (this.tabs[key].length === 1) {
                return;
            }
            let index = this.tabs[key].findIndex(item => item.path === path);
            this.tabs[key].splice(index, 1);
            if (this.active.path !== path) {
                return;
            }
            if (index === this.tabs[key].length) {
                index--;
            }
            this.active = this.tabs[key][index];
            router.push(this.active.path);
        },
        /**
         * 清空标签页
         * @param key 标签组 key
         */
        clearTab(key: keyof Tabs) {
            console.log('->', key);
            this.tabs[key] = this.tabs[key].filter(item => item.path === this.active.path);
        },
        /**
         * 重置标签页
         */
        reset() {
            this.tabs = { toolbox: [], admin: [] };
            this.active = { path: '', name: '' };
        }
    },
});
