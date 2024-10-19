import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: '',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Thêm alias cho thư mục src
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: 'www',
    rollupOptions: {
      output: {
        entryFileNames: `[name].module.js`,
        chunkFileNames: `[name].module.js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
});
