const routes = require('express').Router();
const books = require('./books/index');

routes.get('/api', (req, res) => {
    res
        .status(200)
        .json({
            message: 'Welcome to the api'
        });
});

routes.use('/api/books', books);

module.exports = routes;
