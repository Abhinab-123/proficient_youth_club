import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

console.log('Building React app...');
execSync('cd client && npm run build', { stdio: 'inherit' });

console.log('Copying assets...');
const distDir = './dist/public';
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Copy built files from client/dist to dist/public
execSync('cp -r client/dist/* dist/public/', { stdio: 'inherit' });

console.log('Build completed successfully!');