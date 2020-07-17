import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {babel} from '@rollup/plugin-babel';
import strip from '@rollup/plugin-strip';
import {terser} from 'rollup-plugin-terser';

// Can't import JSON and can't use `module.createRequire`
//   until Node 12.2: https://nodejs.org/api/modules.html#modules_module_createrequire_filename
// import pkg from './package.json';
const browser = './dist/index.js';

export default [
	// ES5 Non-minified
	{
		input: 'build/es5.js',
		output: {
			file: browser,
			format: 'umd',
			name: 'JSON5',
		},
		plugins: [
			strip({functions: ['log']}),
			nodeResolve(),
			commonjs(),
			babel(),
		],
	},
	// ES5 Minified
	{
		input: 'build/es5.js',
		output: {
			file: browser.replace(/\.js$/, '.min.js'),
			format: 'umd',
			name: 'JSON5',
		},
		plugins: [
			strip({functions: ['log']}),
			nodeResolve(),
			commonjs(),
			babel(),
			terser(),
		],
	},
	// ES6 Modules Non-minified
	{
		input: 'lib/index.js',
		output: {
			file: browser.replace(/\.js$/, '.mjs'),
			format: 'esm',
		},
		plugins: [
			strip({functions: ['log']}),
			nodeResolve(),
			commonjs(),
			babel(),
		],
	},
	// ES6 Modules Minified
	{
		input: 'lib/index.js',
		output: {
			file: browser.replace(/\.js$/, '.min.mjs'),
			format: 'esm',
		},
		plugins: [
			strip({functions: ['log']}),
			nodeResolve(),
			commonjs(),
			terser(),
			babel(),
		],
	},
];
