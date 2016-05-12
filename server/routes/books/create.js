const Book = require('../../db/models/books');

module.exports = (req, res) => {
	let book = new Book(req.body);

	book.save((err) => {
		if(err)
			res.send('Book not created!');
	})
	res.status( 201 ).send( book );
	// Book((err, book) => {
	// 	if(err)
	// 		res.send('Cannot Created Book!');
	//
	// 	req.book.title = req.body.title;
	// 	req.book.genre = req.body.genre;
	// 	req.book.author = req.body.author;
	// 	req.book.programming_language = req.body.programming_language;
	// 	req.book.description = req.body.description;
	// 	req.book.image_url = req.body.image_url;
	// 	req.book.buy_url = req.body.buy_url;
	// 	req.book.download_url = req.body.download_url;
	//
	// 	book.save((err) => {
	// 		if(err)
	// 			res.send('Book not created!');
	// 	});
	// });
};
