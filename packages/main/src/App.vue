<script setup lang="ts">
</script>

<template>
 <h1>这是主应用</h1>
 <WujieVue width="100%" height="100%" name="vue3" url="http://localhost:8081" :props="{name: 'Hadwin'}"></WujieVue>
</template>

<style scoped>
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
