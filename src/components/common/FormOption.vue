<script lang="ts" setup>
const prop = defineProps({
    label: String,
    value: [String, Number],
});

const emit = defineEmits(['test']);

function select() {
    console.log(prop);
    emit('test', { ...prop });
}
</script>

<template>
    <div class="select-option" @click="select">
        {{ label }}
    </div>
</template>
