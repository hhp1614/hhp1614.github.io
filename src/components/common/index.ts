import { App } from 'vue';
import Icon from './Icon.vue';
import Copy from './Copy.vue';

export default {
    install(app: App) {
        app.component('Icon', Icon);
        app.component('Copy', Copy);
    },
};
