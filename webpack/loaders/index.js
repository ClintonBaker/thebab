const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: [
			'babel-loader'
		]
	},
	{
		test: /\.(css|styl)$/,
		exclude: /node_modules/,
		use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: [
				{
					loader: "css-loader",
					options: {
						modules: true,
						importLoaders: 1,
						localIdentName: "[local]_[name]"
					}
				},
				{
					loader: 'stylus-loader',
					options: {
						import: [path.resolve(__dirname, '../../source/styles/utils/index.styl')]
					}
				}
			]
		})
	},
	{
		test: /\.json$/,
		exclude: /node_modules/,
		use: 'json-loader'
	},
	{
		test: /\.(ttf|woff|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: 'url-loader'
	}
]
