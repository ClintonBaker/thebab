const morgan = require('morgan');
const cors = require('cors');

module.exports = (app) => {
	// app.use(morgan());
	app.use(cors());
}
