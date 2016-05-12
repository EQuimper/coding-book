const Book = require('../../db/models/books');

module.exports = (req, res) => {
	Book.find((err, books) => {
		if(err)
			res.status(404).json('Books Not Found');
		res.status(200).json({books});
	});
};
