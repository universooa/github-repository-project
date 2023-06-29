<template>
  <div class="wrapper">
  <header>
    <select v-model="states.lang">
      <option v-for="(lang,idx) of langs" :value="lang" :key="idx">{{ lang }}</option>
    </select>
    <select v-model="states.theme">
      <option v-for="(theme,idx) of themes" :value="theme" :key="idx">{{ theme }}</option>
    </select>
  </header>
  <main >
  <div class="custom"></div>
  </main>
  </div>
</template>

<script setup lang="ts">
import { VAceEditor } from '@/vue3_ace_editor/index.ts';
import AceDiff from 'ace-diff';

// optionally, include CSS, or use your own
import 'ace-diff/dist/ace-diff.min.css';
// Or use the dark mode
// import 'ace-diff/dist/ace-diff-dark.min.css';
import {onMounted, reactive, watch} from 'vue';
import './ace-config';
import jsonFile from '../../package.json?raw'
import javascriptFile from '../../postcss.config.js?raw'

const langs = ['json', 'javascript', 'html', 'yaml'];
const themes = ['github', 'chrome', 'monokai'];
let AceDiffInstance=''

const states = reactive({
  lang: 'json',
  theme: 'github',
  content: '',
});


onMounted(()=>{
  console.log(VAceEditor._editor);


  AceDiffInstance = new AceDiff({
    mode: 'ace/mode/javascript',
    element: '.custom',
    left: {
      content: jsonFile,
    },
    right: {
      content: javascriptFile,
    },
  });

})



</script>

<style lang="scss" scoped>
.wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}
header {
  grid-column : 1;
  grid-row : 1;
}

select {
  grid-column : 1;
  grid-row : 2;
  margin-right: 15px;
  position:relative;

}

main {
  flex: 1;
  margin-top: 15px;
  display: flex;
}
//
//.custom {
//  font-size: 16px;
//  border: 1px solid;
//  flex: 1;
//}

.custom {
  grid-column : 1;
  grid-row : 2;
  position: relative;
  //top:300px;
  left:30px;
  width: 500px;

  height: 500px;
  padding: 500px;
  //margin-left: 15px;
  margin-bottom:10px;
  border: 1px solid;
  font-size: 16px;
}

//.merge_code_editor{
//  //display: flex;
//  position:relative;
//  width:100%;
//  height:100%;
//  //overflow:hidden;
//  border:1px solid #ccc;
//  border-radius:4px;
//  padding:100px;
//  margin-bottom:10px;
//  background-color:#fff;
//  color:#333;
//  font-size:14px;
//  line-height:20px;
//  font-family:monospace;
//  font-weight:400;
//  text-align:left;
//  white-space:pre-wrap;
//  word-wrap:break-word;
//  word-break:break-all;
//  -webkit-overflow-scrolling:touch;
//  -ms-overflow-style:none;
//  -webkit-tap-highlight-color:rgba(0,0,0,0);
//  -webkit-user-select:none;
//
//}
</style>
