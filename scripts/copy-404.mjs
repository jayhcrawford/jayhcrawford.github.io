import { copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const source = path.join(distDir, 'index.html');
const target = path.join(distDir, '404.html');

try {
  await access(source, constants.F_OK);
  await copyFile(source, target);
  console.log('Created dist/404.html for SPA fallback');
} catch (error) {
  console.error('Failed to create 404.html fallback:', error);
  process.exitCode = 1;
}
