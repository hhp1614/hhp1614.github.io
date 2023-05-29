import { defineStore } from 'pinia';

/**
 * 深色模式
 */
export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        /** 深色模式是否打开 */
        darkModeOn: false,
    }),
    actions: {
        /**
         * 设置是否是深色模式
         * @param flag 是否是深色模式
         * @returns 当前状态
         */
        async setDarkModeOn(flag: boolean) {
            this.darkModeOn = flag;
            return this.darkModeOn;
        },
    },
});
