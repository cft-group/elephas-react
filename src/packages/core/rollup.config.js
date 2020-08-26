import path from 'path';

import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  mime: 'Mime',
};

const getOutputFileName = (name) => path.resolve(__dirname, './dist', name);

const umd = {
  file: getOutputFileName(pkg.main),
  format: 'umd',
  name: 'elephas-react-core',
  globals,
  sourcemap: true,
  plugins: [terser()],
};

export default {
  input: './src/index.ts',
  output: [
    {
      ...umd,
    },
    {
      ...umd,
      file: getOutputFileName(pkg.module),
      format: 'es',
    },
  ],
  plugins: [
    external([
      ...Object.keys(pkg.peerDependencies || {}),
    ]),
    url(),
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      include: [
        './src/**/*',
        './../../common/**/*',
      ],
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: '> 0.5%, ie >= 11',
            },
            modules: false,
            spec: true,
            useBuiltIns: 'usage',
            forceAllTransforms: true,
            corejs: {
              version: 3,
              proposals: false,
            },
          },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
      ],
    }),
  ],
  external: Object.keys(globals),
};
