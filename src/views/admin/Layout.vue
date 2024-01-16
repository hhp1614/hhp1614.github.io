<template>
  <div class="layout admin">
    <Sidebar tabs-key="admin" />
    <main>
      <Header tabs-key="admin" />
      <article>
        <router-view />
      </article>
      <Footer />
    </main>
  </div>
</template>
