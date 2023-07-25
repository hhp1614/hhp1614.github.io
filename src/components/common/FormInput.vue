<script lang="ts" setup>
import { ref } from 'vue';

defineProps({
    /** 类型 */
    type: { type: String, default: 'text' },
    /** 占位符 */
    placeholder: String,
    /** 标签 */
    label: String,
    /** 是否只读 */
    readonly: Boolean,
    /** 是否禁用 */
    disabled: Boolean,
    /** 是否可清空 */
    clearable: Boolean,
    /** 绑定值 */
    modelValue: String, // 'v-model' must be use 'modelValue'
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'clear'): void;
}>();

const inputRef = ref<HTMLInputElement>();

/**
 * 输入事件
 * @param e 事件对象
 */
function input(e: Event) {
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}

/**
 * 清空事件
 */
function clear() {
    emit('update:modelValue', '');
    emit('clear');
}
</script>

<template>
    <div class="form-item" @click="inputRef?.focus">
        <div class="prefix" :tooltip="label">
            <Icon name="pencil" />
        </div>
        <input
            ref="inputRef"
            :type="type"
            :placeholder="placeholder || label"
            :readonly="readonly"
            :disabled="disabled"
            :value="modelValue"
            @input="input($event)"
        />
        <span v-if="clearable" class="close" @click="clear">×</span>
    </div>
</template>
