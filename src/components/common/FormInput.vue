<script lang="ts" setup>
import { ref } from 'vue';

defineProps({
    type: { type: String, default: 'text' },
    placeholder: String,
    label: String,
    readonly: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    modelValue: String, // 'v-model' must be use 'modelValue'
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const inputRef = ref<HTMLInputElement>();

function input(e: Event) {
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value);
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
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="modelValue"
            @input="input($event)"
        />
        <span v-if="clearable" class="close" @click="emit('update:modelValue', '')">×</span>
    </div>
</template>
