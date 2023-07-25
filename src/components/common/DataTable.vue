<script lang="ts" setup generic="T extends {[key: string]: any}">
/**
 * 列类型
 */
type Col = {
    /** 属性 */
    prop: string;
    /** 表头名称 */
    label: string;
    /** 对齐 */
    align?: 'left' | 'center' | 'right';
    /** 宽度 */
    width?: string | number;
    /** 是否使用插槽 */
    slot?: boolean;
};

defineProps<{
    /** 列类型 */
    cols: Col[];
    /** 表数据 */
    data: T[];
}>();
</script>

<template>
    <table>
        <thead>
            <th v-for="(col, i) in cols" :key="i" :align="col.align || 'left'" :width="col.width">
                {{ col.label }}
            </th>
        </thead>
        <tbody>
            <tr v-for="(item, i) in data" :key="i">
                <template v-for="col in cols" :key="col.prop">
                    <td v-if="col.slot">
                        <slot :name="col.prop" :row="item" />
                    </td>
                    <td v-else>{{ item[col.prop] }}</td>
                </template>
            </tr>
            <tr v-if="data.length === 0">
                <td :colspan="cols.length" align="center">暂无数据</td>
            </tr>
        </tbody>
    </table>
</template>
