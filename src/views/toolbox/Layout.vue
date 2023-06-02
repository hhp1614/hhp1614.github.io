<script lang="ts" setup>
import Sidebar from '@/components/toolbox/Sidebar.vue';
import Header from '@/components/toolbox/Header.vue';
import Footer from '@/components/content/Footer.vue';
</script>

<template>
    <div class="toolbox">
        <Sidebar />
        <main>
            <Header />
            <article>
                <router-view />
            </article>
            <Footer />
        </main>
    </div>
</template>
