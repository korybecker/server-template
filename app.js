const express = require('express');

const app = express();

module.exports = (config) => {
	const log = config.log();
	// Add a request logging middleware in development mode
	if (app.get('env') === 'development) {
		app.use((req, res, next) => {
			log.debug(`${req.method}: ${req.url}`);
			return next();
		});
	}

	// eslint-disable-next-line no-unused-vars
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		// Log out the error to the console
		log.error(err);
		return res.json({
			error: {
				message: err.message
			}
		});
	});
}
