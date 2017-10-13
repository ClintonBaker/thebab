const { resolve } = require('path');

module.exports = {
	'@comps': resolve(__dirname, '../../source/comps'),
	'@styles': resolve(__dirname, '../../source/styles'),
	'@utils': resolve(__dirname, '../../source/utils'),
	'@packages': resolve(__dirname, '../../source/packages'),
	'@scenes': resolve(__dirname, '../../source/comps/scenes'),
	'@store': resolve(__dirname, '../../source/store')
};
