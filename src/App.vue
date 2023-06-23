<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheContents from "@/components/layout/TheContents.vue";
</script>

<template>
  <h1>Repository App</h1>
  <header class="justify-center flex bg-yellow-300 items-center ">
    <TheHeader/>
  </header>
  <body>
  <div class="wrapper">
    <TheContents />
  </div>
  </body>
</template>

<style scoped>

header {
  top:0;
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {

  body {
    display: flex;
    place-items: center;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>