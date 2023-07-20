export default [
    {
        name: 'history',
        meta: { title: '历史记录' },
        children: [
            {
                name: 'history-list',
                meta: { title: '列表', desc: '历史记录列表' },
                component: () => import('@/views/admin/history/HistoryList.vue'),
            },
        ],
    },
] as Pages;
