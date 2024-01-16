/**
 * 工具箱页面
 */
export default [
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
        meta: { title: 'Encrypt', desc: 'AES / DES / RC4 ...' },
        component: () => import('@/views/toolbox/crypto/Encrypt.vue'),
      },
      {
        name: 'unicode',
        meta: { title: 'Unicode', desc: 'UTF-8 / UTF-16' },
        component: () => import('@/views/toolbox/crypto/Unicode.vue'),
      },
      {
        name: 'html-entity',
        meta: { title: 'HTML Entity', desc: 'HTML 实体编码' },
        component: () => import('@/views/toolbox/crypto/HtmlEntity.vue'),
      },
      {
        name: 'url-encoding',
        meta: { title: 'URL Encoding', desc: 'URL 编码' },
        component: () => import('@/views/toolbox/crypto/UrlEncoding.vue'),
      },
    ],
  },
  {
    name: 'generator',
    meta: { title: '生成器' },
    children: [
      {
        name: 'snippets',
        meta: { title: 'Snippets', desc: 'VS Code 代码片段' },
        component: () => import('@/views/toolbox/generator/Snippets.vue'),
      },
    ],
  },
] as Pages
