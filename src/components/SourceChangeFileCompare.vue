<template>

  <div class="title" id="title">
    <h1>Source Change File Compare Component </h1>
  </div>
  <div class="wrapper">
  <div id="code-diff">
    <code-diff
        :old-string="'12345'"
        :new-string="'3456'"
        output-format="side-by-side"/>
  </div>

  <div class="source_code_editor">
  <SourceCodeEditor/>
  </div>

  <div class="merge_code_editor">
  <MergeSourceCodeEditor/>
  </div>
  </div>
</template>

<script setup >
import SourceCodeEditor from "@/components/SourceCodeEditor.vue";
import MergeSourceCodeEditor from "@/components/MergeSourceCodeEditor.vue";

</script>

<style scoped>
.wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}
#code-diff{
  grid-column : 1;
  grid-row : 1;
}
.source_code_editor{
  grid-column : 1;
  grid-row : 2;

}
.merge_code_editor{
  grid-column : 1;
  grid-row : 25;
}

</style>
