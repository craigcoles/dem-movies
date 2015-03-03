var config = require('../config'),
    helper = require('../helper'),
    mdb = require('moviedb')(config.apiKey),
    movie = {};
    popular = {};

movie.info = function(request, response) {
    mdb.movieInfo({id: request.query.movieId}, function(err, res){
        response.render('pages/movie', {
            movie: res,
            helper: helper
        });
    });
};

movie.getGenres = function(request, response) {
	mdb.genreList(function(err, res) {
		if (err !== null) {
            response.render('pages/error');
		} else {
			response.render('pages/genres', {
				genres: genres
			});
		}
	});
};

movie.discoverMovie = function(request, response) {
	mdb.discoverMovie({'primary_release_date.gte':'2014-09-15', 'primary_release_date.lte':'2015-02-15'}, function(err, res) {
		console.log(res || err);
	});
};

movie.list = function(request, response) {
    mdb.miscPopularMovies(function(err, res){
        response.render('pages/popular', {
            popular: res,
            helper: helper
        });
    });
};

module.exports = movie;