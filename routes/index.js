var express = require('express');
var router = express.Router();

var config = require('../config'),
    helper = require('../helper'),
    mdb = require('moviedb')(config.apiKey);

var movie  = require('../lib/movie'),
    words  = require('../lib/words');

/* GET Home page. */
router.get('/', function(req, res) {

    res.render('pages/home', {
        words: words.getList(10)
    });

});

/* GET Movie Page */
router.get('/movie', movie.info);

/* GET Popular Page */
router.get('/popular', movie.list);

module.exports = router;
