const routes = require('express').Router();
const books = require('./books/index');

routes.get('/', (req, res) => {
	res
		.status(200)
		.json({
			message: 'Welcome to the api'
		});
});

routes.use('/books', books);

module.exports = routes;
