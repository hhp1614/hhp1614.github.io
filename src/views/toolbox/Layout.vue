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
