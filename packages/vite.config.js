import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: '../lib',
    //压缩
    minify: false,
    //css分离
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', '@vue/shared', '@vueuse/core', '@floating-ui/vue', 'async-validator', 'axios', /.css/],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].mjs',
          assetFileNames: '[name].[ext]',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../es'
        },
        {
          format: 'cjs',
          //不用打包成.cjs
          entryFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../lib'
        }
      ]
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs'],
      name: 'comic-plus'
    }
  },
  plugins: [
    vue(),
    dts({
      outDir: '../es'
    }),
    dts({
      outDir: '../lib'
    })
  ]
});
