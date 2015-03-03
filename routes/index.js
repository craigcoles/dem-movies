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
router.get('/movie', movie.info);

/* GET Popular Page */
router.get('/popular', movie.list);

module.exports = router;
