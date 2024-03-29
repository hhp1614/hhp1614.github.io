export default [
  {
    name: 'history',
    meta: { title: '浏览器历史记录' },
    children: [
      {
        name: 'history-list',
        meta: { title: '所有记录', desc: '所有历史记录' },
        component: () => import('@/views/admin/history/HistoryList.vue'),
      },
      {
        name: 'history-host',
        meta: { title: '域名记录', desc: '域名访问次数' },
        component: () => import('@/views/admin/history/HistoryHost.vue'),
      },
    ],
  },
] as Pages
