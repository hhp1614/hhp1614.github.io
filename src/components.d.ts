import BtnCopyVue from './components/common/BtnCopy.vue';
import BtnIconVue from './components/common/BtnIcon.vue';
import DataTableVue from './components/common/DataTable.vue';
import DatePickerVue from './components/common/DatePicker.vue';
import DialogVue from './components/common/Dialog.vue';
import FormCheckboxVue from './components/common/FormCheckbox.vue';
import FormInputVue from './components/common/FormInput.vue';
import FormRadioVue from './components/common/FormRadio.vue';
import FormSelectVue from './components/common/FormSelect.vue';
import IconVue from './components/common/Icon.vue';
import PaginateVue from './components/common/Paginate.vue';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        BtnCopy: typeof BtnCopyVue;
        BtnIcon: typeof BtnIconVue;
        FormCheckbox: typeof FormCheckboxVue;
        FormInput: typeof FormInputVue;
        FormRadio: typeof FormRadioVue;
        FormSelect: typeof FormSelectVue;
        Icon: typeof IconVue;
        DataTable: typeof DataTableVue;
        Paginate: typeof PaginateVue;
        Dialog: typeof DialogVue;
        DatePicker: typeof DatePickerVue;
    }
}
