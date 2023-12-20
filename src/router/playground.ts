export default [
  {
    name: 'frontend',
    meta: { title: '前端' },
    children: [
      {
        name: 'frontend-index',
        meta: { title: '前端演练场', desc: 'HTML & CSS & JS' },
        component: () => import('@/views/playground/frontend/FrontendIndex.vue'),
      },
    ],
  },
] as Pages
