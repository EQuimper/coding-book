const Book = require('../../db/models/books');

module.exports = (req, res) => {
	Book.findById({_id: req.params.id}, (err, book) => {
		if(err)
			res.status(404).json({
				message: 'Book not found!'
			});
		res.status(200).json({book});
	});
};
