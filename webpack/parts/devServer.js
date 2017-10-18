const path = require('path');

module.exports = {
	contentBase: path.resolve('./build/'),
	historyApiFallback: true,
	host: 'localhost',
	compress: true,
	overlay: true,
	inline: true,
	noInfo: true,
	open: false
};
