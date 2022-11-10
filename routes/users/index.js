const express = require('express');
const router = express.Router();

module.exports = () => {
	router.get('/', (req, res) => {
		res.send('<h1>Users Page</h1>');
	});

	return router;
};
