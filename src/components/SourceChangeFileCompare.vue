<script setup lang="ts">
import {onMounted, ref} from "vue";
import AceDiff from 'ace-diff';
import ace from 'ace-builds';
import "ace-builds/esm-resolver"
import '@/styles/ace-diff.scss';



onMounted(()=>{
  // const mode=ref('split')
  // const theme=ref('light')
  // const language=ref('ts')
  // const prev=ref('prev')
  // const current=ref('current')
  // const folding=ref('false')

  const left_content = `import AceDiff from '../../src/index';

const AceDiffInstance = new AceDiff({
  mode: 'ace/mode/javascript',
  element: '.custom',
  left: {

  "name": "ace-diff",
  "version": "0.1.0",
  "date": "Mar 15, 2015",
  "description": "A diff/merging wrapper for Ace Editor built on google-diff-match-patch",
  "main": "dist/ace-diff.js",
  "scripts": {
    "test": "echo 'Error: no test specified' && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/benkeen/ace-diff.git"
  },
  "keywords": [
    "ace",
    "dif",
    "diffing",
    "ace editor",
    "syntax highlighting"
  ],
  "author": "Ben Keen",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/benkeen/ace-diff/issues"
  },
  "homepage": "https://github.com/benkeen/ace-diff",
  "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-contrib-uglify": "^0.8.0",
    "grunt-contrib-clean": "~0.5.0",
    "grunt-contrib-watch": "~0.5.3",
    "grunt-contrib-jshint": "^0.10.0"
  }
  },
  },
});
`;

  const right_content = `{
  "name": "ace-diff",
  "version": "0.1.1",
  "date": "Mar 21, 2015",
  "description": "A diff/merging wrapper for Ace Editor built on google-diff-match-patch",
  "main": "dist/ace-diff.js",
  "scripts": {
    "test": "echo 'Error: no test specified' && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/benkeen/ace-diff.git"
  },
  "keywords": [
    "ace",
    "dif",
    "diffing",
    "merge",
    "merging",
    "ace editor",
    "syntax highlighting"
  ],
  "author": "Ben Keen",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/benkeen/ace-diff/issues"
  },
  "homepage": "https://github.com/benkeen/ace-diff",
  "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-contrib-uglify": "^0.8.0",
    "grunt-contrib-clean": "~0.5.0",
    "grunt-contrib-watch": "~0.5.3",
    "grunt-contrib-jshint": "^0.10.0"
  }
}`;

  var editor=  ace.edit('editor',{
    mode: "ace/mode/javascript",
  })
  ace.config.set('basePath', './');
  editor.setTheme("ace/theme/twilight");

  const AceDiffInstance = new AceDiff({
    ace: editor,
    element: '.custom',
    left: {
      content: left_content,
    },
    right: {
      content: right_content,
    },
  });

})



</script>

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

  <div id="editor">
    editor
  </div>
</template>

<style scoped>
#editor {
  width: 100%;
  height: 400px;
}
</style>
