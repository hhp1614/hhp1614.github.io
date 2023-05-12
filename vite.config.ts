import { defineConfig, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

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
        server: {
            host: '0.0.0.0',
            port: 4000,
        },
        alias: {
            '@': '/src/',
            '@store': '/src/store/',
            '@utils': '/src/utils/',
            '@components': '/src/components/',
        },
        plugins,
    };
});
