<script lang="ts" setup>
defineProps({
    modelValue: { type: Boolean, default: false },
    title: String,
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'success'): void;
}>();

function success() {
    emit('success');
    emit('update:modelValue', false);
}
</script>

<template>
    <div v-if="modelValue" class="dialog" @click.self="emit('update:modelValue', false)">
        <div class="dialog-wrapper">
            <div v-if="title" class="dialog-title">{{ title }}</div>
            <div class="dialog-content">
                <slot />
            </div>
            <div class="dialog-action">
                <slot name="action">
                    <button @click="success">确定</button>
                </slot>
            </div>
        </div>
    </div>
</template>
