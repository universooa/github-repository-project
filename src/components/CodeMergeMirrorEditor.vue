
<template>
  <codemirror
      :merge="true"
      :options="cmOption"
      @cursorActivity="onCmCursorActivity"
      @ready="onCmReady"
      @focus="onCmFocus"
      @blur="onCmBlur"
      @input="onCmInput"
      @scroll="onCmScroll"
  />
</template>

<script>
// import dedent from 'dedent'
import { codemirror } from 'vue-codemirror'
import { EditorState } from '@codemirror/state'
// language
// import 'codemirror/mode/xml/xml.js'
// import '@codemirror/lang-css'
// import '@codemirror/lang-xml'
// import '@codemirror/lang-htmlmixed'
// import 'codemirror/mode/htmlmixed/htmlmixed.js'

// merge css
// import 'codemirror/addon/merge/merge.css'

// merge js
// import 'codemirror/addon/merge/merge.js'

// google DiffMatchPatch
import DiffMatchPatch from 'diff-match-patch'

// DiffMatchPatch config with global
window.diff_match_patch = DiffMatchPatch
window.DIFF_DELETE = -1
window.DIFF_INSERT = 1
window.DIFF_EQUAL = 0

export default {
  name: 'codemirror-example-merge-view',
  title: 'Mode: text/html & merge view',
  components: {
    codemirror
  },
  data() {
    const html = document.documentElement.innerHTML
        .replace(/<style([\s\S]*?)<\/style>/ig, '')
        .replace(/></ig, '>\n<')
    const orig2 = html
        .replace('body', 'body2')
        .replace('content="320"', 'content="360"')
        .replace(/<title>([\s\S]*?)<\/title>/ig, '<title>test title</title>')
    return {
      cmOption: {
        value: html,
        origLeft: null,
        orig: orig2,
        connect: 'align',
        mode: 'text/html',
        lineNumbers: true,
        collapseIdentical: false,
        highlightDifferences: true
      }
    }
  },
  methods: {
    onCmCursorActivity(a, b, c) {
      console.debug('onCmCursorActivity', a, b, c)
    },
    onCmReady(a, b, c) {
      console.debug('onCmReady', a, b, c)
    },
    onCmFocus(a, b, c) {
      console.debug('onCmFocus', a, b, c)
    },
    onCmBlur(a, b, c) {
      console.debug('onCmBlur', a, b, c)
    },
    onCmInput(code) {
      console.debug('onCmInput', code)
    },
    onCmScroll() {
      console.debug('onCmScroll')
    }
  }
}
</script>

