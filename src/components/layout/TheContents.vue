<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>

.wrapper {
display: flex;
place-items: flex-start;
flex-wrap: wrap;
}

</style>
