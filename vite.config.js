import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
   server:{
    host:'192.168.1.5'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
//   css: {
//     preprocessorOptions: {
//         less: {
//             additionalData: 'parens-division',
//         },
//     },
//  }
})
