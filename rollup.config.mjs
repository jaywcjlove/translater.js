import terser from '@rollup/plugin-terser';
import { readFileSync } from 'node:fs';

const isMinify = process.env.MINIFY === 'true';
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
const banner = `/*!\n * ${pkg.name} v${pkg.version}\n * ${pkg.description}\n *\n * Copyright (c) 2018 ${pkg.author}\n * ${pkg.homepage}\n *\n * Licensed under the ${pkg.license} license.\n */`;
const bannerMINI = `/*! ${pkg.name} v${pkg.version} | ${pkg.license} (c) 2018 ${pkg.author} | ${pkg.homepage} */`;


// /*! translater.js v1.0.12 | MIT (c) 2018 kenny wong <wowohoo@qq.com> | http://jaywcjlove.github.io/translater.js/ */
export default {
  input: 'src/translater.js',
  output: {
    file: isMinify ? 'dist/translater.min.js' : 'dist/translater.js',
    format: 'umd',
    name: 'Translater',
    banner: isMinify ? bannerMINI : banner,
    exports: 'default'
  },
  plugins: [
    isMinify && terser()
  ].filter(Boolean)
};
