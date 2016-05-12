const Book = require('../../db/models/books');

module.exports = (req, res) => {
	Book.findById({_id: req.params.id}, (err, book) => {
		// Don't update the id
		if(req.body._id)
			delete req.body._id;

		// Get every element of the object for upgrade
		for (var p in req.body) {
			book[p] = req.body[p];
		};

		// Save the new book
		book.save((err) => {
			if (err)
				res.status( 500 ).send( err );
			else {
				res.json({book});
			}
		});
	});
};
