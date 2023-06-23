<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="title">
    <h1>Remote Home</h1>
  </div>
  <main class="home">

    <div class="content">
    <TheWelcome />
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
