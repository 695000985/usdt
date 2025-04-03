// import { defineConfig } from 'vite';

// // https://vitejs.dev/config
// export default defineConfig({});
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 确保路径正确
      crypto: path.resolve(__dirname, 'node_modules/crypto-browserify/index.js')
    }
  }
});