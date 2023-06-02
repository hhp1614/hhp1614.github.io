import { App, Component } from 'vue';
import Icon from './Icon.vue';
import Copy from './Copy.vue';
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';

const components = {
    Icon,
    Copy,
    FormInput,
    FormSelect,
} as { [key: string]: Component };

export default {
    install(app: App) {
        for (const key in components) {
            app.component(key, components[key] as Component);
        }
    },
};
