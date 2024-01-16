<script lang="ts" setup>
type DayType = { day: number; data: string; current?: boolean }

const props = defineProps({
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
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'clear'): void
}>()

/**
 * 填充 0
 * @param num 数字
 */
const padZero = (num: number) => String(num).padStart(2, '0')
/**
 * 获取 v-modal 的时间，如果没有则使用当前时间
 */
const getPropDate = () => (Number.isNaN(Date.parse(props.modelValue!)) ? new Date() : new Date(props.modelValue!))

const datePickerRef = ref<HTMLDivElement>()
const inputRef = ref<HTMLInputElement>()

/** v-modal 绑定的时间 */
const origin = computed(() => {
  const temp = getPropDate()
  return {
    year: temp.getFullYear(),
    month: temp.getMonth() + 1,
    day: temp.getDate(),
  }
})

/** 当前时间对象 */
const d = ref(getPropDate())
/** 当前时间的年月日 */
const date = computed(() => ({
  year: d.value.getFullYear(),
  month: d.value.getMonth() + 1,
  day: d.value.getDate(),
}))

/** 日历显示状态 */
const calendarStatus = ref(false)
/** 日历 */
const calendar = computed(() => {
  const res = [] as DayType[]
  const { year, month } = date.value

  /** 当前月份天数 */
  const currDays = new Date(year, month, 0).getDate()
  /** 这个月第一天星期几 */
  let currWeek = new Date(year, month - 1, 1).getDay()
  // 如果值是 0 的话，那么本月的第一天是周日
  currWeek = currWeek === 0 ? 7 : currWeek
  /** 上个月的天数 */
  const prevDays = new Date(year, month - 1, 0).getDate()
  /** 上个月的天数 */
  const prevLastDays = currWeek - 1

  // 上个月的日期
  for (let i = prevLastDays; i >= 0; i--) {
    res.push({ day: prevDays - i, data: `${year}-${padZero(month - 1)}-${padZero(prevDays - i)}` })
  }

  // 本月的日期
  for (let i = 1; i <= currDays; i++) {
    res.push({ day: i, data: `${year}-${padZero(month)}-${padZero(i)}`, current: true })
  }

  // 下个月的日期
  const lastPrevDays = 42 - currDays - prevLastDays
  for (let i = 1; i < lastPrevDays; i++) {
    res.push({ day: i, data: `${year}-${padZero(month + 1)}-${padZero(i)}` })
  }

  return res
})

/**
 * 打开日历
 */
function openCalendar() {
  calendarStatus.value = true
  inputRef.value?.focus()
}

/**
 * 选择日期
 * @param item 当前选中的日期
 */
function selectDay(item: DayType) {
  emit('update:modelValue', item.data)
  d.value = new Date(item.data)
  calendarStatus.value = false
  inputRef.value?.blur()
}

/**
 * 跳转月份，正数表示前一月，负数表示后一月
 * @param step 步长
 */
function stepMonth(step: number) {
  d.value = new Date(d.value.setMonth(d.value.getMonth() + step))
}

/**
 * 设置选中的类名
 * @param item 当前选中的日期
 */
function setActiveCls(item: DayType) {
  const { year: dy, month: dm } = date.value
  const { year: oy, month: om, day: od } = origin.value
  const isOriginDay = oy === dy && om === dm && od === item.day
  return {
    current: item.current,
    active: props.modelValue && item.current && isOriginDay,
  }
}

/**
 * 输入事件
 * @param e 事件对象
 */
function input(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
  nextTick(() => {
    d.value = getPropDate()
  })
}

/**
 * 清空事件
 */
function clear() {
  emit('update:modelValue', '')
  emit('clear')
  calendarStatus.value = false
}

onMounted(() => {
  // 监听日历的关闭
  document.addEventListener('click', e => {
    if (!datePickerRef.value?.contains(e.target as Node)) {
      calendarStatus.value = false
    }
  })
})
</script>

<template>
  <div ref="datePickerRef" class="form-item date-picker" @click="openCalendar">
    <div class="prefix" :tooltip="label">
      <Icon name="date" />
    </div>
    <input
      ref="inputRef"
      :type="type"
      :placeholder="placeholder || label"
      :disabled="disabled"
      :value="modelValue"
      @input="input($event)"
      :readonly="readonly"
    />
    <span v-if="clearable" class="close" @click.stop="clear">×</span>

    <Transition name="slide-fade">
      <div class="date-picker-calendal" v-show="calendarStatus" @click.stop="inputRef?.focus">
        <div class="date-picker-calendal-header">
          <span class="date-picker-calendal-header-icon" @click="stepMonth(-1)">‹</span>
          <span class="date-picker-calendal-header-content">{{ date.year }}年{{ date.month }}月</span>
          <span class="date-picker-calendal-header-icon" @click="stepMonth(+1)">›</span>
        </div>
        <div class="date-picker-calendal-week">
          <span>日</span>
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
        </div>
        <div class="date-picker-calendal-body">
          <span v-for="(item, i) in calendar" :key="i" :class="setActiveCls(item)" @click.stop="selectDay(item)">
            {{ item.day }}
          </span>
        </div>
      </div>
    </Transition>
  </div>
</template>
