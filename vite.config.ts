import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
      hashPrefix: 'prefix'
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
