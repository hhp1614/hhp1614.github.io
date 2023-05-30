/**
 * 页面类型
 */
type Pages = {
    path: string;
    name: string;
    meta: { title: string };
    component?: any;
    children: Pages;
}[];

/**
 * 工具箱页面
 */
export const toolboxPages = [
    {
        name: 'format',
        meta: { title: '代码格式' },
        children: [{ name: 'json', meta: { title: 'JSON 格式化' }, component: () => import('@/views/toolbox/format/Json.vue') }],
    },
    {
        name: 'crypto',
        meta: { title: '编码加密' },
        children: [
            { name: 'hash', meta: { title: 'Hash 编码' }, component: () => import('@/views/toolbox/crypto/Hash.vue') },
            { name: 'base64', meta: { title: 'Base64 编码' }, component: () => import('@/views/toolbox/crypto/Base64.vue') },
        ],
    },
    {
        name: 'generator',
        meta: { title: '生成器' },
        children: [{ name: 'snippets', meta: { title: '代码片段' }, component: () => import('@/views/toolbox/generator/Snippets.vue') }],
    },
] as Pages;
