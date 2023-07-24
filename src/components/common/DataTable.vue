<script lang="ts" setup generic="T extends {[key: string]: any}">
type Col = {
    prop: string;
    label: string;
    align?: 'left' | 'center' | 'right';
    width?: string | number;
    slot?: boolean;
};

defineProps<{
    cols: Col[];
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
                        <slot :name="col.prop" :row="item"></slot>
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
