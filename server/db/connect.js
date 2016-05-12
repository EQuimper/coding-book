let mongoose = require('mongoose');

let db = mongoose.connect('mongodb://localhost/coding-book');

module.exports = db;
