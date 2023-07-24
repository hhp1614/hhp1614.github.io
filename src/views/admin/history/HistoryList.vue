<script lang="ts" setup>
import { GetHistoryAllItem, getHistoryAll, removeHistory } from '@/api/history';
import toast from '@/utils/toast';
import { reactive, ref } from 'vue';

const form = reactive({
    title: '',
    page: 1,
    size: 28,
    total: 0,
});

const cols = [
    { prop: 'title', label: '标题' },
    { prop: 'scheme', label: '协议', width: 50 },
    { prop: 'host', label: '域名', width: 120 },
    { prop: 'port', label: '端口', width: 50 },
    { prop: 'path', label: '路径' },
    { prop: 'query', label: '查询参数' },
    { prop: 'fragment', label: '锚点' },
    { prop: 'create_ts', label: '创建时间', width: 140 },
    { prop: 'action', label: '操作', width: 80, slot: true },
];
const data = ref<GetHistoryAllItem[]>([]);

async function getData(page?: number) {
    if (page) {
        form.page = page;
    }
    const res = await getHistoryAll({ page: form.page, size: form.size });
    data.value = res.data.data;
    form.page = res.data.current_page;
    form.total = res.data.total;
}

function visit(url: string) {
    window.open(url, '_blank');
}

async function remove(id: number) {
    const res = await removeHistory(id);
    res.status && toast('删除成功', 'success') && getData();
}

getData();
</script>

<template>
    <div class="history-list">
        <div class="form">
            <FormInput v-model="form.title" label="标题" clearable />
        </div>
        <div class="content">
            <DataTable :cols="cols" :data="data">
                <template #action="{ row }">
                    <span class="link" @click="visit(row.url)">访问</span>
                    <span class="link" @click="remove(row.id)">删除</span>
                </template>
            </DataTable>
            <Paginate :page="form.page" :size="form.size" :total="form.total" @change="getData" />
        </div>
    </div>
</template>
