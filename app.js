const express = require('express');

const app = express();
const routes = require('./routes');

const TodoService = require('./services/TodoService');

module.exports = (config) => {
	const log = config.log();

	const todoService = new TodoService();

	// Add a request logging middleware in development mode
	if (app.get('env') === 'development') {
		app.use((req, res, next) => {
			log.debug(`${req.method}: ${req.url}`);
			return next();
		});
	}

	// use routes
	app.use('/', routes({ todoService }));

	// eslint-disable-next-line no-unused-vars
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		// Log out the error to the console
		log.error(err);
		return res.json({
			error: {
				message: err.message,
			},
		});
	});
	return app;
};
