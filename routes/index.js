var express = require('express'),
	router = express.Router(),
	movie  = require('../lib/movie');

/* GET Home page. */
router.get('/', function(req, res) {
    res.render('pages/home');
});

/* GET Movie Page */
router.get('/m/:movieID', movie.movieInfo);
router.get('/t/:tvID', movie.tvInfo);
router.get('/popular', movie.popular);
router.get('/genres', movie.genres);
router.get('/discover/:genres', movie.discover);

module.exports = router;
