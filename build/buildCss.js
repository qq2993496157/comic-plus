import cpy from 'cpy';
import { resolve } from 'path';
const sourceDir = resolve(__dirname, '../packages/components');
const targetLib = resolve(__dirname, '../lib/components');
const targetEs = resolve(__dirname, '../es/components');
const iconDir = resolve(__dirname, '../packages/icons');
const targetLibIcon = resolve(__dirname, '../lib/icons');
const targetEsIcon = resolve(__dirname, '../es/icons');

const sourceDirRoot = resolve(__dirname, '../packages');
const targetLibRoot = resolve(__dirname, '../lib/typings');
const targetEsRoot = resolve(__dirname, '../es/typings');

const buildCss = async () => {
  await cpy(`${sourceDir}/**/*.css`, targetLib);
  await cpy(`${sourceDir}/**/*.css`, targetEs);
  await cpy(`${iconDir}/**/*.css`, targetLibIcon);
  await cpy(`${iconDir}/**/*.css`, targetEsIcon);
  await cpy(`${sourceDirRoot}/typings/*.d.ts`, targetLibRoot);
  await cpy(`${sourceDirRoot}/typings/*.d.ts`, targetEsRoot);
};
buildCss();
