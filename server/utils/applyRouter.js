const routers = require('../routers');

const { API_ROOT, STATIC_ROOT } = process.env;

const applyRouter = (app) => {
	app.get(API_ROOT, routers.apiRouter);
	app.get(STATIC_ROOT, routers.staticRouter);
}

module.exports = applyRouter;
