import cpy from 'cpy';
import { resolve } from 'path';
import fs from 'fs';
import CleanCSS from 'clean-css';

// 组件
const sourceDir = resolve(__dirname, '../packages/components');
const targetLib = resolve(__dirname, '../lib/components');
const targetEs = resolve(__dirname, '../es/components');

// icon
const iconDir = resolve(__dirname, '../packages/icons');
const targetLibIcon = resolve(__dirname, '../lib/icons');
const targetEsIcon = resolve(__dirname, '../es/icons');

// typings
const sourceDirRoot = resolve(__dirname, '../packages/typings');
const targetRoot = resolve(__dirname, '../typings');

const minifyCssFiles = async (sourceDir, targetDir) => {
  const cssFiles = await cpy(`${sourceDir}/**/*.css`, targetDir, { onlyFiles: true });
  for (const file of cssFiles) {
    const filePath = resolve(targetDir, file.replace(`${sourceDir}/`, ''));
    const cssContent = fs.readFileSync(filePath, 'utf8');
    const minifiedCss = new CleanCSS().minify(cssContent).styles; //在这里压缩css
    fs.writeFileSync(filePath, minifiedCss, 'utf8');
  }
};

const buildCss = async () => {
  await minifyCssFiles(sourceDir, targetLib);
  await minifyCssFiles(sourceDir, targetEs);
  await minifyCssFiles(iconDir, targetLibIcon);
  await minifyCssFiles(iconDir, targetEsIcon);

  // copy type files
  await cpy(`${sourceDirRoot}/*.ts`, targetRoot);

  // update global.d.ts
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
