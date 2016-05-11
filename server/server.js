require('./db/connect');
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

const routes = require('./routes/index');

let app = express();

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`App listening to ${PORT}`);
});
