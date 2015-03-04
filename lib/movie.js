var config = require('../config'),
    helper = require('../helper'),
    mdb = require('moviedb')(process.env.TMDB_API_KEY || config.tmdb),
    movie = {};

movie.info = function(request, response) {
    mdb.movieInfo({id: request.params.movieID}, function(err, res){
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

movie.discover = function(request, response) {
	movieQuery = {
		'with_genres': request.params.genres
	};

	mdb.discoverMovie(movieQuery, function(err, res) {
		response.setHeader('Content-Type', 'text/html');
		for (var i in res.results) {
			response.write(res.results[i].title + '<br/>');
		}
		response.end();
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
