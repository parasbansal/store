const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const env = require('./env');

// Routes
const products = require('./routes/products');

const app = express();

mongoose.connect(env.database, { useMongoClient: true });

// Setting public folder
app.use(express.static(path.join(__dirname, 'public')));

// Using Cors Middleware
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));
// parse application/json
app.use(bodyParser.json());

// Using Routes
app.use('/', products);

// 404
app.get('*', (req, res) => {
	res.send('404');
});

// Listening to port
app.listen(env.port, () => {
	console.log('serving on localhost:' + env.port);
});