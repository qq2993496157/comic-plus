import cpy from 'cpy';
import { resolve } from 'path';
const sourceDir = resolve(__dirname, '../packages/components');
const targetLib = resolve(__dirname, '../lib/components');
const targetEs = resolve(__dirname, '../es/components');
const buildCss = async () => {
  await cpy(`${sourceDir}/**/*.css`, targetLib);
  await cpy(`${sourceDir}/**/*.css`, targetEs);
};
buildCss();
