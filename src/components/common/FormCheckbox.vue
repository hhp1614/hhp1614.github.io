<script lang="ts" setup>
defineProps({
  /** 是否选中 */
  modelValue: Boolean,
  /** 标签 */
  label: String,
  /** 选项列表 */
  list: { type: Array<{ label?: string; value: string }>, default: [{ value: '' }] },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

function checked(value: boolean) {
  emit('update:modelValue', !value)
  emit('change', !value)
}
</script>

<template>
  <div class="form-item">
    <label class="checkbox">
      <input type="checkbox" :checked="modelValue" @change="checked(modelValue)" />
      <span>{{ label }}</span>
    </label>
  </div>
</template>
