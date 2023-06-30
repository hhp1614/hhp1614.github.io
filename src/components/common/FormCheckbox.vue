<script lang="ts" setup>
defineProps({
    modelValue: Boolean,
    label: String,
    list: { type: Array<{ label?: string; value: string }>, default: [{ value: '' }] },
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'change', value: boolean): void;
}>();

function checked(value: boolean) {
    emit('update:modelValue', !value);
    emit('change', !value);
}
</script>

<template>
    <div class="form-item">
        <label class="checkbox">
            <input type="checkbox" :value="modelValue" @change="checked(modelValue)" />
            <span>{{ label }}</span>
        </label>
    </div>
</template>
