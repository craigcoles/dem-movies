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

}

movie.list = function(request, response) {

    mdb.miscPopularMovies(function(err, res){
        response.render('pages/popular', {
            popular: res,
            helper: helper
        });
    });

}

module.exports = movie;