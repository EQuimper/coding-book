let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`App listening to ${PORT}`);
});
