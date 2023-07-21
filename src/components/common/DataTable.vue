<script lang="ts" setup>
type Col = {
    prop: string;
    label: string;
    align?: 'left' | 'center' | 'right';
    width?: string | number;
};

defineProps<{
    cols: Col[];
    data: any[];
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
                <td v-for="(col, j) in cols" :key="j">{{ item[col.prop] }}</td>
            </tr>
            <tr v-if="data.length === 0">
                <td :colspan="cols.length" align="center">暂无数据</td>
            </tr>
        </tbody>
    </table>
</template>
