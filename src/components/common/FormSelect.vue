<script lang="ts" setup>
import { ref } from 'vue';

defineProps({
    placeholder: { type: String, default: '请选择' },
    label: String,
    clearable: Boolean,
    modelValue: String,
    list: Array<{ label: string; value: string }>,
});

const emit = defineEmits(['update:modelValue']);

const inputRef = ref();
const listStatus = ref(false);

function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}

function clearInput() {
    emit('update:modelValue', '');
}

function select(value: string) {
    emit('update:modelValue', value);
}
</script>

<template>
    <div class="form-item" @click="inputRef.focus">
        <div class="prefix" :tooltip="label">
            <Icon name="pencil" />
        </div>
        <input
            ref="inputRef"
            :placeholder="placeholder"
            :value="modelValue"
            @focus="listStatus = true"
            @blur="listStatus = false"
            @input="handleInput($event)"
            readonly
        />
        <span v-if="clearable" class="close" @click="clearInput">×</span>
        <Icon name="arrow-down" />
        <Transition name="slide-fade">
            <div v-show="listStatus" class="select-list" @test="select" @click="e => e.stopPropagation()">
                <div v-for="{ label, value } in list" :key="value" class="select-option" @click="select(value)">
                    {{ label }}
                </div>
            </div>
        </Transition>
    </div>
</template>
