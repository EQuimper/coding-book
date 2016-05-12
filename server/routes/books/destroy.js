const Book = require('../../db/models/books');

module.exports = (req, res) => {
	Book.findById({_id: req.params.id}, (err, book) => {
		if(err)
			res.status(404).send('Book not find!');
		book.remove(() => {
			res.send('Book Deleted!');
		});
	});
};
