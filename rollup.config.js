import babel from '@rollup/plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

const input = 'src/index.ts';
const external = [...Object.keys(pkg.peerDependencies)];

const plugins = [
  babel({ babelHelpers: 'bundled' }),
  sizeSnapshot({ snapshotPath: 'build/ui-components-size.json' }),
  typescript({
    typescript: require('typescript'),
  }),
  visualizer({
    filename: 'build/ui-components-visualizer.html',
  }),
];

export default [
  {
    input,
    output: {
      file: 'build/index-esm.js',
      format: 'esm',
      sourcemap: true,
    },
    external,
    plugins,
  },
  {
    input,
    output: {
      file: 'build/index-umd.js',
      format: 'umd',
      globals: {
        'lodash': 'lodash',
      },
      name: 'SampleLib',
      sourcemap: true,
    },
    external,
    plugins,
  },
];
