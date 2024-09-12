import cpy from 'cpy';
import { resolve } from 'path';
import fs from 'fs';

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

  //copy文件之后 由于文件路径发生变化 需要将global.d.ts文件中的相对路径替换掉
  const globalDtsPath = resolve(targetRoot, 'global.d.ts');
  try {
    let fileContent = fs.readFileSync(globalDtsPath, 'utf8');
    fileContent = fileContent.replace(/import\(['"]([^'"]+)['"]\)/g, "import('comic-plus')");
    fs.writeFileSync(globalDtsPath, fileContent, 'utf8');
    console.log('Successfully replaced imports in global.d.ts');
  } catch (err) {
    console.error('Error processing global.d.ts:', err);
  }
};
buildCss();
