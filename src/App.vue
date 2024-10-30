<script setup lang="ts">

</script>

<template>
  <main class="page-main">
    <router-view />
  </main>
</template>

<style scoped>
.page-main {
  width: 100%;
  max-width: 100%;
  padding: 2% 10%;
  display: flex;
  align-items: center;
  height: auto;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
