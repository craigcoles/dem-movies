var config = require('../config'),
    helper = require('../helper'),
    apiKey = require('../apiKey');
    keys = '';
    movie = {};

if (typeof apiKey === 'undefined'){
    keys = process.env.TMDB_API_KEY;
} else {
    keys = apiKey.tmdb;
}

var mdb = require('moviedb')(keys);

movie.info = function(request, response) {
    mdb.movieInfo({id: request.query.movieId}, function(err, res){
        response.render('pages/movie', {
            movie: res,
            helper: helper
        });
    });
};

movie.genres = function(request, response) {
	mdb.genreList(function(err, res) {
		if (err !== null) {
            response.render('pages/error');
		} else {
			var viewData = { genres: [] };

			viewData.genres = res.genres;

			response.render('pages/genres', viewData);
		}
	});
};

movie.discoverMovie = function(request, response) {
	mdb.discoverMovie({'primary_release_date.gte':'2014-09-15', 'primary_release_date.lte':'2015-02-15'}, function(err, res) {
		console.log(res || err);
	});
};

movie.popular = function(request, response) {
    mdb.miscPopularMovies(function(err, res){
    	var viewData = { movies: [] };

    	// Create viewmodels for movies
    	res.results.map(function(movie,i) {
    		var movieModel = {
    			movieData: movie,
    			url: helper.getMovieUrl(movie.id)
    		};

    		viewData.movies.push(movieModel);
    	})

        response.render('pages/popular', viewData);
    });
};

module.exports = movie;