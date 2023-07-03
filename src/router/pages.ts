/**
 * 页面类型
 */
type Pages = {
    path: string;
    name: string;
    meta: { title: string; desc: string };
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
        children: [
            {
                name: 'json',
                meta: { title: 'JSON', desc: '格式化 / 压缩' },
                component: () => import('@/views/toolbox/format/Json.vue'),
            },
        ],
    },
    {
        name: 'crypto',
        meta: { title: '编码加密' },
        children: [
            {
                name: 'hash',
                meta: { title: 'Hash', desc: 'MD5 / SHA ...' },
                component: () => import('@/views/toolbox/crypto/Hash.vue'),
            },
            {
                name: 'base64',
                meta: { title: 'Base64', desc: '编码 / 解码' },
                component: () => import('@/views/toolbox/crypto/Base64.vue'),
            },
            {
                name: 'encrypt',
                meta: { title: '对称加密', desc: 'AES / DES / RC4 ...' },
                component: () => import('@/views/toolbox/crypto/Encrypt.vue'),
            },
        ],
    },
    {
        name: 'generator',
        meta: { title: '生成器' },
        children: [
            {
                name: 'snippets',
                meta: { title: 'Snippets', desc: '代码片段' },
                component: () => import('@/views/toolbox/generator/Snippets.vue'),
            },
        ],
    },
] as Pages;
