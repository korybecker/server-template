const express = require('express');
const router = express.Router();

const todosRoute = require('./todos');
const usersRoute = require('./users');

module.exports = (params) => {
	router.get('/', (req, res) => {
		res.send('<h1>Home Page</h1>');
	});

	// hook all routes to router
	router.use('/todo', todosRoute(params.todoService));
	router.use('/user', usersRoute());

	return router;
};
