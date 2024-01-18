import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path';

console.log(`${path.resolve(__dirname, './src/services')}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@services': `${path.resolve(__dirname, './src/services')}`,
      '@interface': path.resolve(__dirname, './src/interface'),
      '@common': `${path.resolve(__dirname, './src/common')}`,
      '@context': `${path.resolve(__dirname, './src/context')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks')}`,
    },
  },
  server: {
    proxy: {
      "/api" : {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})