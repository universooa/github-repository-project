import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from 'vite-plugin-top-level-await'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
const dependencies = require("./package.json").dependencies;
// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:5174",

  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    federation({
      name: 'repository-app',
      filename: 'remoteEntry.js',
      exposes: {
        './RepoContent': './src/App.vue',
        './RepoRoutes':'./src/router/index.ts'
      },
      shared: [{...dependencies },'vue','pinia',"vue-router"],

    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
  build: {
    target: 'esnext',
    minify: false,

  },
  preview: {
    host: 'localhost',
    port: 5174,
    strictPort: true
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
