<script lang="ts" setup>
import Sidebar from '@/components/content/Sidebar.vue';
import Header from '@/components/content/Header.vue';
import Footer from '@/components/content/Footer.vue';
</script>

<template>
    <div class="layout toolbox">
        <Sidebar tabs-key="toolbox" />
        <main>
            <Header tabs-key="toolbox" />
            <article>
                <router-view />
            </article>
            <Footer />
        </main>
    </div>
</template>
