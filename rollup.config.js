import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import pkg from './package.json' assert { type: 'json' };

// const isDev = process.env.NODE_ENV !== 'production';

export default {
  input: 'index.js',
  output: [
    { file: `dist/${pkg.main}`, format: 'cjs' },
    { file: `dist/${pkg.module}`, format: 'es' },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    // eslint({
    //   throwOnError: true,
    //   throwOnWarning: true,
    //   // include: 'src/**',
    //   exclude: 'node_modules/**',
    // }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    terser(),
  ],
};
