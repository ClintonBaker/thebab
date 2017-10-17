const webpack = require('webpack');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	new webpack.EnvironmentPlugin({
		NODE_ENV: 'development'
	}),
	new webpack.NoEmitOnErrorsPlugin(),
	new SimpleProgressWebpackPlugin({
		format: 'compact'
	}),
	new BundleAnalyzerPlugin({
		analyzerMode: 'server',
		analyzerHost: 'localhost',
		analyzerPort: 7777,
		reportFilename: 'bundle-report.html',
		defaultSizes: 'parsed',
		openAnalyzer: false,
		generateStatsFile: true,
		statsFilename: 'stats.json'
	}),
	new webpack.HotModuleReplacementPlugin({
		multiStep: false
	}),
	new ExtractTextPlugin({ filename: 'css/styles.css' })
];
