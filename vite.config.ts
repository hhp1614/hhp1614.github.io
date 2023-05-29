import { defineConfig, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

/**
 * 重写 rollup 打包方法，解决 GitHub Pages 404 问题
 * @see https://github.com/vitejs/vite/issues/9119
 * @param name 文件名
 * @returns 标准化后的文件名
 */
function sanitizeFileName(name: string) {
    const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
    const DRIVE_LETTER_REGEX = /^[a-z]:/i;
    const match = DRIVE_LETTER_REGEX.exec(name);
    const driveLetter = match ? match[0] : '';

    // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
    // Otherwise, avoid them because they can refer to NTFS alternate data streams.
    return driveLetter + name.substring(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const plugins: PluginOption = [vue()];
    if (mode === 'production') {
        // 打包开启 PWA
        plugins.push(
            VitePWA({
                injectRegister: 'auto',
                registerType: 'autoUpdate',
                includeAssets: ['avatar.svg', 'avatar-dark.svg'],
                workbox: {
                    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,woff,ttf}'],
                    runtimeCaching: [
                        {
                            handler: 'CacheFirst',
                            urlPattern: /^https?:\/\/at\.alicdn\.com\/.*/i,
                            options: {
                                cacheName: 'icon-fonts-cache',
                                expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }, // 365 天
                                cacheableResponse: { statuses: [0, 200] },
                            },
                        },
                    ],
                },
                manifest: {
                    name: '亦留亦思',
                    short_name: '亦留亦思',
                    description: '亦留亦思',
                    icons: [
                        { src: 'avatar.svg', sizes: 'any', type: 'image/svg' },
                        { src: 'avatar.svg', sizes: '1333x1333', type: 'image/svg' },
                    ],
                },
            }),
        );
    }
    return {
        // 开发服务器设置
        server: {
            host: '0.0.0.0',
            port: 4000,
        },
        resolve: {
            // 别名
            alias: {
                '@': '/src/',
                '@store': '/src/store/',
                '@utils': '/src/utils/',
                '@components': '/src/components/',
            },
        },
        // CSS 预处理
        css: {
            preprocessorOptions: {
                scss: {
                    // 注入依赖
                    additionalData: `@import "@/scss/variables";`,
                },
            },
        },
        plugins,
        build: {
            outDir: 'dist',
            emptyOutDir: true,
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.split('/node_modules/').pop()?.split('/')[0];
                        }
                    },
                    sanitizeFileName,
                },
            },
        },
    };
});
