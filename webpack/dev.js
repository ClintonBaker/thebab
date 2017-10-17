const { resolve } = require('path');
const loaders = require('./loaders');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const alias = require('./parts/alias');
const devServer = require('./parts/devServer');
const plugins = require('./parts/plugins');

module.exports = {
	cache: false,
	devtool: 'cheap-module-source-map',
	context: resolve(__dirname, '../source'),
	entry: ['babel-polyfill', './index.js'],

	output: {
		filename: 'js/index.js',
		path: resolve(__dirname, '../build'),
	},

	module: {
		rules: [...loaders],
	},

	resolve: {
		modules: [resolve(__dirname, '../node_modules')],
		extensions: ['.js', '.json', '.jsx', '.css', '.styl'],
		alias: alias,
	},

	devServer,

	plugins: [
		...plugins,
		new CleanWebpackPlugin(
			['*.hot-update.js', '*.hot-update.js.map', '*.hot-update.json', 'styles.*', 'css/', 'js/'],
			{
				verbose: true,
				root: resolve(__dirname, '../build'),
			}
		),
	],
};
