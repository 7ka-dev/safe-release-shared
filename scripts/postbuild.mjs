import { writeFileSync } from 'node:fs';

// tsc не умеет писать package.json в outDir — помечаем форматы явно,
// чтобы Node и Vite корректно определяли ESM/CJS по расширению .js
writeFileSync('dist/esm/package.json', JSON.stringify({ type: 'module' }, null, 2) + '\n');
writeFileSync('dist/cjs/package.json', JSON.stringify({ type: 'commonjs' }, null, 2) + '\n');