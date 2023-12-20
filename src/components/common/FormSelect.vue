<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps({
  /** 占位符 */
  placeholder: { type: String, default: '请选择' },
  /** 标签 */
  label: String,
  /** 是否可清空 */
  clearable: Boolean,
  /** 绑定值 */
  modelValue: String,
  /** 选项列表 */
  list: { type: Array<{ label?: string; value: string }>, default: [{ value: '' }] },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
  (e: 'clear'): void
}>()

/** 输入框 */
const inputRef = ref<HTMLInputElement>()
/** 列表显示状态 */
const listShow = ref(false)
/** 清除按钮显示状态 */
const closeShow = ref(false)

/** v-model 对应 value 的值 */
const modelLabel = computed(() => props.list.find(item => item.value === props.modelValue)?.label ?? '')

/**
 * 输入事件
 * @param e 事件对象
 */
function input(e: Event) {
  const target = e.target as HTMLInputElement
  const item = props.list.find(item => item.label === target.value)!
  emit('update:modelValue', item.value)
}

/**
 * 选择事件
 * @param value 选中的值
 */
function select(value: string) {
  emit('update:modelValue', value)
  emit('change', value)
}

/**
 * 键盘事件
 * @param e 键盘事件对象
 */
function keydown(e: KeyboardEvent) {
  const index = props.list.findIndex(item => item.value === props.modelValue) ?? 0
  if (e.key === 'Enter') {
    // 回车
    listShow.value = false
  } else if (e.key === 'ArrowDown') {
    // 向下
    const nextIndex = index >= props.list.length - 1 ? 0 : index + 1
    select(props.list![nextIndex].value)
  } else if (e.key === 'ArrowUp') {
    // 向上
    const prevIndex = index <= 0 ? props.list.length - 1 : index - 1
    select(props.list![prevIndex].value)
  }
}

/**
 * 清空事件
 */
function clear() {
  emit('update:modelValue', '')
  emit('clear')
}
</script>

<template>
  <div class="form-item" @click="inputRef!.focus" @mouseover="closeShow = true" @mouseleave="closeShow = false">
    <div class="prefix" :tooltip="label">
      <Icon name="pencil" />
    </div>
    <input
      ref="inputRef"
      :placeholder="placeholder"
      :value="modelLabel || modelValue"
      @focus="listShow = true"
      @blur="listShow = false"
      @input="input($event)"
      @keydown="keydown($event)"
      readonly
    />
    <template v-if="clearable">
      <span v-if="closeShow" class="close" @click.stop="clear">×</span>
      <Icon v-else class="collapse" name="arrow-down" :class="{ open: listShow }" />
    </template>
    <template v-else>
      <Icon class="collapse" name="arrow-down" :class="{ open: listShow }" />
    </template>
    <Transition name="slide-fade">
      <div
        v-show="listShow"
        class="select-list"
        @test="select"
        @click="e => e.stopPropagation()"
        @mouseover.stop="closeShow = false"
      >
        <div
          v-for="{ label, value } in list"
          :key="value"
          class="select-option"
          :class="{ selected: value === modelValue }"
          @click="select(value)"
        >
          {{ label || value }}
        </div>
      </div>
    </Transition>
  </div>
</template>
