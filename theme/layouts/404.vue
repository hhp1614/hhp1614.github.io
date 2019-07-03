<template>
  <div class="notfound">
    <h1>Page Not Found :(</h1>
    <div class="backhome">
      <saber-link to="/">← Back to HomePage</saber-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  font-family: Helvetica;
  font-weight: 300;
  font-size: 3rem;
}
.notfound {
  max-width: 500px;
  margin: 0 40px;
}
.backhome {
  margin: 20px 0;
}
</style>