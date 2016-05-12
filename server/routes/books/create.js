const Book = require('../../db/models/books');

module.exports = (req, res) => {
	let book = new Book(req.body);

	book.save((err) => {
		if(err)
			res.send('Book not created!');
	})
	res.status( 201 ).send( book );
};
