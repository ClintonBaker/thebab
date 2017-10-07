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
						include: [path.resolve(__dirname, '../../styles/utils')]
					}
				}
			]
		})
	},
	{
		test: /\.json$/,
		exclude: /node_modules/,
		use: 'json-loader'
	}
]
