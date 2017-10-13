const staticRouter = (request, response) => {
	response.send('STATIC ROUTE!');
};

module.exports = staticRouter;
