import { App, Component } from 'vue';
import Icon from './Icon.vue';
import BtnIcon from './BtnIcon.vue';
import BtnCopy from './BtnCopy.vue';
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';
import FormRadio from './FormRadio.vue';
import FormCheckbox from './FormCheckbox.vue';
import DataTable from './DataTable.vue';
import Paginate from './Paginate.vue';

const components = {
    Icon,
    BtnIcon,
    BtnCopy,
    FormInput,
    FormSelect,
    FormRadio,
    FormCheckbox,
    DataTable,
    Paginate,
} as { [key: string]: Component };

export default {
    install(app: App) {
        for (const key in components) {
            app.component(key, components[key] as Component);
        }
    },
};
