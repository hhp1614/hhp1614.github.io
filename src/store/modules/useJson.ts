import { defineStore } from 'pinia'

const defTab = { id: Date.now(), title: 'Tab', text: '' }

/**
 * Json.vue
 */
export const useJsonStore = defineStore('json', {
  state: () => ({
    /** 标签页 */
    tabs: [{ ...defTab }],
    /** 当前激活的标签页 */
    activeTabId: defTab.id,
  }),
  getters: {
    /** 当前激活标签页的文本 */
    activeTabText: state => state.tabs.find(tab => tab.id === state.activeTabId)!.text,
  },
  actions: {
    /**
     * 更改标签页标题
     * @param id ID
     * @param title 标签页标题
     */
    changeTabName(id: number, title: string, newTitle: string) {
      if (title !== newTitle) {
        this.tabs.find(tab => tab.id === id)!.title = newTitle
      }
    },
    /**
     * 添加标签页
     */
    addTab() {
      const tab = { ...defTab }
      tab.id = Date.now()
      this.tabs.push(tab)
      this.activeTabId = tab.id
    },
    /**
     * 切换标签页
     * @param id ID
     */
    changeTab(id: number) {
      if (this.activeTabId !== id) {
        this.activeTabId = id
      }
    },
    /**
     * 更新已激活标签页的文本
     * @param text 文本
     */
    changeTabText(text: string) {
      const tab = this.tabs.find(tab => tab.id === this.activeTabId)!
      tab.text = text
    },
    /**
     * 删除标签页
     * @param id ID
     */
    removeTab(id: number) {
      const index = this.tabs.findIndex(tab => tab.id === id)
      this.tabs.splice(index, 1)
      if (this.tabs.length === 0) {
        this.addTab()
      }
      if (this.activeTabId === id) {
        const nextIndex = Math.min(index + 1, this.tabs.length - 1)
        this.activeTabId = this.tabs[nextIndex].id
      }
    },
    /**
     * 清空所有标签页
     * @param inputRef 输入框，用聚焦到输入框
     */
    clearTab() {
      const tab = { ...defTab }
      this.tabs = [tab]
      this.activeTabId = tab.id
    },
  },
})
