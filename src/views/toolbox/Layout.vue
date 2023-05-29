<script lang="ts" setup>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
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
