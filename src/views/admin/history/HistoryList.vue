<script lang="ts" setup>
import { GetHistoryIndexItem, getHistoryIndex, removeHistory } from '@/api/history';
import toast from '@/utils/toast';

const schemeList = [{ value: 'http' }, { value: 'https' }];

// 表单数据
const form = reactive({
    title: '',
    scheme: '',
    host: '',
    port: '',
    page: 1,
    size: 28,
    ts: '',
});

// 表格数据
const cols = [
    { prop: 'title', label: '标题' },
    { prop: 'scheme', label: '协议', width: 50 },
    { prop: 'host', label: '域名', width: 200 },
    { prop: 'port', label: '端口', width: 50 },
    { prop: 'create_ts', label: '创建时间', width: 140 },
    { prop: 'action', label: '操作', width: 170, slot: true },
];
const data = ref<GetHistoryIndexItem[]>([]);
const total = ref(0);

/**
 * 弹窗数据
 */
const dialog = reactive({
    visible: false,
    title: '',
    row: {} as GetHistoryIndexItem,
    data: [] as { label: string; value: string | number }[],
});

/**
 * 获取数据
 * @param page 页码
 */
async function getData(page?: number) {
    if (typeof page === 'number') {
        form.page = page;
    }
    const res = await getHistoryIndex(form);
    data.value = res.data.data;
    form.page = res.data.current_page;
    total.value = res.data.total;
}

/**
 * 访问 URL
 * @param url 链接
 * @param newTab 是否新标签
 */
function visit(url: string, newTab = false) {
    window.open(url, newTab ? '_blank' : '_self');
}

/**
 * 查看详情
 * @param row 当前行
 */
function detail(row: GetHistoryIndexItem) {
    dialog.visible = true;
    dialog.row = row;
    dialog.data = [
        { label: '标题', value: row.title },
        { label: '协议', value: row.scheme },
        { label: '域名', value: row.host },
        { label: '端口', value: row.port },
        { label: '路径', value: row.path },
        { label: '查询参数', value: row.query },
        { label: '锚点', value: row.fragment },
        { label: '创建时间', value: row.create_ts },
        { label: '链接', value: row.url },
    ];
}

/**
 * 删除
 */
async function remove(id: number) {
    if (!confirm('确定删除吗?')) {
        return;
    }
    const res = await removeHistory(id);
    res.status && toast('删除成功', 'success') && getData();
}

/**
 * 清空表单
 */
function clearForm() {
    form.title = '';
    form.scheme = '';
    form.host = '';
    form.port = '';
    getData();
}

getData();
</script>

<template>
    <div class="history-list">
        <div class="form">
            <FormInput
                v-model="form.title"
                class="full"
                label="标题"
                @keydown.enter="getData"
                @clear="getData"
                clearable
            />
            <FormSelect
                v-model="form.scheme"
                label="协议"
                :list="schemeList"
                placeholder="选择协议"
                @change="getData()"
                @clear="getData"
                clearable
            />
            <FormInput
                v-model="form.host"
                class="full"
                label="域名"
                @keydown.enter="getData"
                @clear="getData"
                clearable
            />
            <FormInput
                v-model="form.port"
                type="number"
                label="端口"
                @keydown.enter="getData"
                @clear="getData"
                clearable
            />
            <DatePicker v-model="form.ts" label="创建时间" @keydown.enter="getData" @clear="getData" clearable />

            <BtnIcon icon="search" tooltip="查询" @click="getData" />
            <BtnIcon icon="clear" @click="clearForm" />
        </div>
        <div class="content">
            <DataTable :cols="cols" :data="data">
                <template #action="{ row }">
                    <span class="link" @click="visit(row.url)">打开</span>
                    <span class="link" @click="visit(row.url, true)">新标签页</span>
                    <span class="link" @click="detail(row)">详情</span>
                    <span class="link" @click="remove(row.id)">删除</span>
                </template>
            </DataTable>
            <Paginate :page="form.page" :size="form.size" :total="total" @change="getData" />
        </div>
    </div>
    <Dialog title="详情" v-model="dialog.visible">
        <table class="wrap">
            <tr v-for="{ label, value } in dialog.data">
                <td width="80">{{ label }}</td>
                <td>{{ value }}</td>
            </tr>
        </table>
        <template #action>
            <button @click="visit(dialog.row.url)">当前窗口打开</button>
            <button @click="visit(dialog.row.url, true)">新标签页打开</button>
        </template>
    </Dialog>
</template>
