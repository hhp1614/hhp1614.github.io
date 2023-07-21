<script lang="ts" setup>
import { reactive } from 'vue';

const form = reactive({
    title: '',
});
</script>

<template>
    <div class="history-list">
        <div class="form">
            <FormInput v-model="form.title" label="标题" clearable />
        </div>
        <div class="content">table</div>
    </div>
</template>
