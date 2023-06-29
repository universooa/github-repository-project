<template>
  <div class="title" id="title">
    <h1>Source Change File Compare Component </h1>
  </div>
  <div id="code-diff">
    <code-diff
        :old-string="'12345'"
        :new-string="'3456'"
        output-format="side-by-side"/>
  </div>


  <SourceCodeEditor/>

</template>

<script setup >
import SourceCodeEditor from "@/components/SourceCodeEditor.vue";

</script>

<style scoped>


</style>
