<script lang="ts" setup>
import { reactive } from 'vue';

const form = reactive({
    title: '',
});

const cols = [
    { prop: 'id', label: 'ID' },
    { prop: 'host', label: '域名' },
    { prop: 'count', label: '次数' },
];
const data = [] as Object[];
</script>

<template>
    <div class="history-list">
        <div class="form">
            <FormInput v-model="form.title" label="标题" clearable />
        </div>
        <div class="content">
            <DataTable :cols="cols" :data="data" />
        </div>
    </div>
</template>
