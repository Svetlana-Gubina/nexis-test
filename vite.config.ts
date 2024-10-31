import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  base: '/nexis-test/',
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
});
