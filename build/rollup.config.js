const path = require("path");
/** PLUGINS */
const { babel, getBabelOutputPlugin } = require("@rollup/plugin-babel")
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";
//import eslint from "@rollup/plugin-eslint";

const pkg = require("../package.json");
const banner  = require("./banner.js");
const DEV = process.env.DEV === "true";

const plugins = [
	resolve({
		moduleDirectories: [
			path.resolve(__dirname, "../node_modules")
		],
		browser:true, 
		preferBuiltins: true
	}),
	commonjs(),
	babel({
		exclude: "node_modules/**",
		babelHelpers: "runtime"
	}),
	json()
	//eslint()
]

const entryConfig = (input, options) => {
	return {
		input: input,
		output: [
			{
				banner,
				format: "es",
				file: path.resolve(__dirname,  `${options.dir}/${options.name}.es.js`),
				exports: "named",
				sourcemap: DEV ? 'inline' : false,
				plugins:[getBabelOutputPlugin({
					presets: [
						[
							"@babel/preset-env",
							{
								targets: {
				                	esmodules: true
				                },
				                bugfixes: true,
				                loose: true
							}
						]
					]
				})]
			},
			{
				banner,
				format: "es",
				file: path.resolve(__dirname,  `${options.dir}/${options.name}.es.min.js`),
				exports: "named",
				sourcemap: DEV ? 'inline' : false,
				plugins:[getBabelOutputPlugin({
					presets: [
						[
							"@babel/preset-env",
							{
								targets: {
				                	esmodules: true
				                },
				                bugfixes: true,
				                loose: true
							}
						]
					]
				}),
				terser({
					ecma: 2021,
			        mangle: { toplevel: true },
			        compress: {
			            module: true,
			            toplevel: true,
			            unsafe_arrows: true,
			            drop_console: !DEV,
			            drop_debugger: !DEV
			        },
			        output: { quote_style: 1 }
				})]
			},
			{
				banner,
				format: "umd", // Universal Module Definition
				name: options.name,
				file: path.resolve(__dirname,  `${options.dir}/${options.name}.umd.js`),
				sourcemap: DEV ? 'inline' : false,
				exports: "named",
			},
			{
				banner,
				format: "umd", // Universal Module Definition
				name: options.name,
				file: path.resolve(__dirname,  `${options.dir}/${options.name}.umd.min.js`),
				sourcemap: DEV ? 'inline' : false,
				exports: "named",
				plugins:[
				terser({
					ecma: 2021,
			        mangle: { toplevel: true },
			        compress: {
			            module: true,
			            toplevel: true,
			            unsafe_arrows: true,
			            drop_console: !DEV,
			            drop_debugger: !DEV
			        },
			        output: { quote_style: 1 }
				})]
			}
		],
		plugins
	}
}

const rollupConfig = [
	entryConfig(
		path.resolve(__dirname, '../src/index.js'),
		{
			dir: '../dist',
			name: 'fascino'
		}
	),
	entryConfig(
		path.resolve(__dirname, '../src/all.js'),
		{
			dir: '../dist',
			name: 'fascino-all'
		}
	)
];

const FascinoPlugins = {
	http: path.resolve(__dirname, '../src/Plugins/http/index.js'),
	progress: path.resolve(__dirname, '../src/Plugins/progressbar/index.js')
}

for(let folder in FascinoPlugins) {
	if(FascinoPlugins.hasOwnProperty(folder)) {
		rollupConfig.push(
			entryConfig(	
				FascinoPlugins[folder],
				{
					dir: `../dist/plugins/${folder}`,
					name: `fascino-${folder}`
				}
			)
		)
	}
}

module.exports = rollupConfig