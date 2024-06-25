import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8088 //端口号
  },
  base: './',
  plugins: [
    vue(),
    [
      'import',
      {
        libraryName: 'comic-plus',
        customName: (name) => {
          return `comic-plus/lib/${name}`;
        }
      }
    ]
  ]
});
