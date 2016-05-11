const books = require('express').Router();

const list = require('./list');

books.get('/', list);

module.exports = books;
