const books = require('express').Router();

const list = require('./list');
const single = require('./single');
const update = require('./update');
const destroy = require('./destroy');
const create = require('./create');

books
	.get('/', list)
	.get('/:id', single)
	.patch('/:id', update)
	.delete('/:id', destroy)
	.post('/', create);

module.exports = books;
