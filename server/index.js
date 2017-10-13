const fs = require('fs');
const express = require('express');
const applyMiddleware = require('./utils/applyMiddleware');
const applyRouter = require('./utils/applyRouter');

const { API_ROOT } = process.env;
const PORT = 3987;
const app = express();

applyMiddleware(app);
applyRouter(app);

app.listen(PORT, () => {
	// console.log(`App running at http://localhost:${PORT}`);
});
