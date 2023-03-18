const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const pkg = require("../package.json");
const banner  = require("./banner.js");

const ModuleRules = {
	rules: [
		{
			test: /\.m?js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
		        options: {
		          presets: ['@babel/preset-env']
		        }
			}
		}
	]
}

const Plugins = [
	new webpack.BannerPlugin(banner)
]

const webDev  = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		fascino: {
			import: './src/index.js',
			filename: '[name].js',
			library: {
				name: "fascino",
				type: 'umd',
	      		umdNamedDefine: true,
			}
		},
		"fascino-all": {
			import: "./src/all.js",
			filename: "[name].js",
			library: {
				name: "fascino-all",
				type: 'umd',
	      		umdNamedDefine: true,
			}
		},
		"fascino-http": {
			import: "./src/Plugins/http/index.js",
			filename: "plugins/http/[name].js",
			library: {
				name: "fascino-http",
				type: 'umd',
	      		umdNamedDefine: true,
			}
		},
		"fascino-progress": {
			import: "./src/Plugins/http/index.js",
			filename: "plugins/progress/[name].js",
			library: {
				name: "fascino-progress",
				type: 'umd',
	      		umdNamedDefine: true,
			}
		}
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		assetModuleFilename: "[path][name][ext]",
		clean: true,
	},
	module: ModuleRules,
	plugins: Plugins,
	experiments: {
	  topLevelAwait: true
	},
	optimization: {
		minimize: false
	}
}

const webProd = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		fascino: {
			import: './src/index.js',
			filename: '[name].min.js',
			library: {
				name: "fascino",
				type: 'umd',
	      		umdNamedDefine: true,
			}
		},
		"fascino-all": {
			import: "./src/all.js",
			filename: "[name].min.js",
			library: {
				name: "fascino-all",
				type: 'umd',
	      		umdNamedDefine: true,
			}
		},
		"fascino-http": {
			import: "./src/Plugins/http/index.js",
			filename: "plugins/http/[name].min.js",
			library: {
				name: "fascino-http",
				type: 'umd',
	      		umdNamedDefine: true,
			}
		},
		"fascino-progress": {
			import: "./src/Plugins/http/index.js",
			filename: "plugins/progress/[name].min.js",
			library: {
				name: "fascino-progress",
				type: 'umd',
	      		umdNamedDefine: true,
			}
		}
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		assetModuleFilename: "[path][name][ext]",
		iife: true,
	},
	module: ModuleRules,
	plugins: Plugins,
	experiments: {
	  topLevelAwait: true
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			extractComments: true
		})]
	}
}

module.exports = [
	webDev,
	webProd
];