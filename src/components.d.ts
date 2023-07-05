import BtnCopy from './components/common/BtnCopy.vue';
import BtnIcon from './components/common/BtnIcon.vue';
import FormCheckbox from './components/common/FormCheckbox.vue';
import FormInput from './components/common/FormInput.vue';
import FormRadio from './components/common/FormRadio.vue';
import FormSelect from './components/common/FormSelect.vue';
import Icon from './components/common/Icon.vue';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        BtnCopy: typeof BtnCopy;
        BtnIcon: typeof BtnIcon;
        FormCheckbox: typeof FormCheckbox;
        FormInput: typeof FormInput;
        FormRadio: typeof FormRadio;
        FormSelect: typeof FormSelect;
        Icon: typeof Icon;
    }
}
