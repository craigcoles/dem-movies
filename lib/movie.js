var config = require('../config'),
    helper = require('../helper'),    
    mdb = require('moviedb')(config.apiKey),
    movie = {};

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

module.exports = movie;