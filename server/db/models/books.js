let mongoose = require('mongoose');

let BookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	programming_language: {
		type: String
	},
	author: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image_url: {
		type: String,
		required: true
	},
	buy_url: {
		type: String,
	},
	download_url: {
		type: String
	}
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
