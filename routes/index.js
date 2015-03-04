var express = require('express'),
	router = express.Router(),
	movie  = require('../lib/movie');

/* GET Home page. */
router.get('/', function(req, res) {
    res.render('pages/home', {
        words: []
    });
});

/* GET Movie Page */
router.get('/m/:movieID', movie.info);

/* GET Popular Page */
router.get('/popular', movie.popular);

router.get('/genres', movie.genres);

router.get('/discover/:genres', movie.discover);

module.exports = router;
