const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
    .then((moviesList) => {
        res.render('movies', {movies: moviesList})
    })
});

router.get('/movie-detail/:movieId', (req, res) => {
    let movieId = req.params.movieId;
    Movie.findById(movieId)
    .then((movieFound) => {
        res.render('movie-detail', {movie: movieFound})
    });
})
module.exports = router;
