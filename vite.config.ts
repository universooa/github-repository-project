import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from 'vite-plugin-top-level-await'
// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:5174",
  build: {
    target: 'esnext',
    minify: false,
  },
  plugins: [
    vue(),
    federation({
      name: 'repository-app',
      filename: 'remoteEntry.js',
      exposes: {
        './RepoContent': './src/components/RepositoryApp.vue',
      },
      shared: ['vue', 'pinia'],

    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
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
