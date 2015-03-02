var config = require('../config'),
    helper = require('../helper'),
    mdb = require('moviedb')(config.apiKey),
    movie = {};
    popular = {};

movie.info = function(request, response) {
	console.log(request.query);
    mdb.movieInfo({id: request.query.movieId}, function(err, res){
    	if (err !== null) {
    		response.render('pages/error', {
    			config: config
    		});
    	} else {
            response.render('pages/movie', {
                movie: res,
                helper: helper
            });
        }
    });

}

movie.list = function(request, response) {
    console.log(request.query);
    mdb.miscPopularMovies(function(err, res){
        if (err !== null) {
            response.render('pages/error', {
                config: config
            });
        } else {
            response.render('pages/popular', {
                popular: res,
                helper: helper
            });
        }
    });

}

module.exports = movie;