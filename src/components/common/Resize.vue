<script lang="ts" setup>
import { throttle } from '@/utils';
import { ref, watch } from 'vue';

const props = defineProps({
    isHorizontal: Boolean,
});

const emit = defineEmits<{
    (e: 'resize', clientX: number, clientY: number): void;
}>();

const isDragging = ref(false);

const onMouseMove = throttle((e: MouseEvent) => {
    if (!isDragging.value) {
        return;
    }
    emit('resize', e.clientX, e.clientY);
});

function onResizeStart() {
    isDragging.value = true;
}
function onResizeEnd() {
    isDragging.value = false;
}

watch(isDragging, v => {
    if (v) {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onResizeEnd);
    } else {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onResizeEnd);
    }
});
</script>

<template>
    <div class="resizer" @mousedown.passive="onResizeStart"></div>
</template>
