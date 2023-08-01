<script lang="ts" setup>
import { GetHistoryHostItem, getHistoryHost, removeHistoryHost } from '@/api/history';
import toast from '@/utils/toast';
import { reactive, ref } from 'vue';

const form = reactive({
    host: '',
    page: 1,
    size: 28,
});

const cols = [
    { prop: 'host', label: '域名' },
    { prop: 'count', label: '访问次数', width: 300 },
    { prop: 'action', label: '操作', width: 100, slot: true },
];
const data = ref<GetHistoryHostItem[]>([]);
const total = ref(0);

/**
 * 获取数据
 * @param page 页码
 */
async function getData(page?: number) {
    if (typeof page === 'number') {
        form.page = page;
    }
    const res = await getHistoryHost(form);
    data.value = res.data.data;
    form.page = res.data.current_page;
    total.value = res.data.total;
}

/**
 * 删除
 */
async function remove(id: number) {
    if (!confirm('确定删除吗?')) {
        return;
    }
    const res = await removeHistoryHost(id);
    res.status && toast('删除成功', 'success') && getData();
}

/**
 * 清空表单
 */
function clearForm() {
    form.host = '';
    getData();
}

getData();
</script>

<template>
    <div class="history-host">
        <div class="form">
            <FormInput
                v-model="form.host"
                class="full"
                label="域名"
                @keydown.enter="getData"
                @clear="getData"
                clearable
            />
            <BtnIcon icon="search" tooltip="查询" @click="getData" />
            <BtnIcon icon="clear" @click="clearForm" />
        </div>
        <div class="content">
            <DataTable :cols="cols" :data="data">
                <template #action="{ row }">
                    <span class="link" @click="remove(row.id)">删除</span>
                </template>
            </DataTable>
            <Paginate :page="form.page" :size="form.size" :total="total" @change="getData" />
        </div>
    </div>
</template>
