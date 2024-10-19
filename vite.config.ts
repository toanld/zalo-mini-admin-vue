import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: '',
  plugins: [
    vue(),
    {
      name: 'override-config', // Plugin tùy chỉnh để đặt target esnext
      config: () => ({
        build: {
          target: 'esnext', // Đặt target là esnext để hỗ trợ các tính năng hiện đại
        },
      }),
    },
  ],
  esbuild: {
    target: 'esnext', // Đặt target cho esbuild
  },
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
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
