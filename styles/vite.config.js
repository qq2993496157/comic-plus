import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    minify: true,
    target: 'modules',
    outDir: '../theme', // 设置输出目录为项目根目录下的 theme 文件夹
    rollupOptions: {
      // input 中不包含 CSS 文件
      input: ['index.ts'],
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        dir: '../theme' // 设置输出目录为项目根目录下的 theme 文件夹
      }
    }
  }
});
