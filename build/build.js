import cpy from 'cpy';
import { resolve } from 'path';
//组件
const sourceDir = resolve(__dirname, '../packages/components');
const targetLib = resolve(__dirname, '../lib/components');
const targetEs = resolve(__dirname, '../es/components');

//icon
const iconDir = resolve(__dirname, '../packages/icons');
const targetLibIcon = resolve(__dirname, '../lib/icons');
const targetEsIcon = resolve(__dirname, '../es/icons');

//typings
const sourceDirRoot = resolve(__dirname, '../packages/typings');
const targetRoot = resolve(__dirname, '../typings');

const buildCss = async () => {
  //copy css文件
  await cpy(`${sourceDir}/**/*.css`, targetLib);
  await cpy(`${sourceDir}/**/*.css`, targetEs);
  await cpy(`${iconDir}/**/*.css`, targetLibIcon);
  await cpy(`${iconDir}/**/*.css`, targetEsIcon);
  //copy type文件
  await cpy(`${sourceDirRoot}/*.ts`, targetRoot);
};
buildCss();
