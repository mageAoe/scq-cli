const { fileURLToPath } =  require('url');
// import { createRequire } from 'module';
const dirname = fileURLToPath(new URL('.', import.meta.url));
// export const require = createRequire(import.meta.url);
// export const dynamicImport = new Function('file', 'return import(file)');

exports.dirname = dirname;