const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Genre = require('./models/genre.js');
const Book = require('./models/book.js');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');

// Database Object
const db = mongoose.connection;

// Routes
app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if (err) {
			throw err;
		}
		res.json(genres);
	});
});

app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if (err) {
			throw err;
		}
		res.json(books);
	});
});

// Listen
app.listen(3000);
console.log('RUUUUN!')

