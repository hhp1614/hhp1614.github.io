<script lang="ts" setup>
/**
 * 当前时间
 */
function useDatetime() {
    const dateTime = ref('');
    const padZero = (num: number) => String(num).padStart(2, '0');

    const rec = () => {
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const date = d.getDate();
        const day = d.getDay();
        const hour = padZero(d.getHours());
        const minute = padZero(d.getMinutes());
        const second = padZero(d.getSeconds());
        const week = '日一二三四五六';
        dateTime.value = `${year}年${month}月${date}日 星期${week[day]} ${hour}:${minute}:${second}`;
        setTimeout(() => rec(), 1000);
        return dateTime;
    };

    return rec();
}

const datetime = useDatetime();
</script>

<template>
    <footer>
        <span>{{ datetime }}</span>
        &emsp;
        <a href="https://github.com/hhp1614" target="_blank">hhp1614</a>
    </footer>
</template>
