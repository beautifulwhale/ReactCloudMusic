import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
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
    },
    server: {
      port: 7789,
      open: true,
      proxy: {
        '/api': {
          target: loadEnv(mode, process.cwd()).VITE_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
