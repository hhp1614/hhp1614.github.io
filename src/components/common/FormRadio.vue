<script lang="ts" setup>
defineProps({
    modelValue: [String, Number],
    list: { type: Array<{ label?: string; value: string; desc?: string }>, default: [{ value: '' }] },
    label: String,
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'change', value: string): void;
}>();

function checked(value: string) {
    emit('update:modelValue', value);
    emit('change', value);
}
</script>

<template>
    <div class="form-item" :label="label">
        <label v-for="item in list" :key="item.value" class="radio">
            <input
                type="radio"
                value="{{ item.value }}"
                :checked="modelValue === item.value"
                @change="checked(item.value)"
            />
            <span :tooltip="item.desc">{{ item.label || item.value }}</span>
        </label>
    </div>
</template>
