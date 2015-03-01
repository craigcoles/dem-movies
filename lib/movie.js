module.exports = function(opts) {

    var mdb = require('moviedb')(opts.apiKey),
        helper = require('../helper');

	var movie = {};

    movie.info = function(request, response) {
    	console.log(request.query);
        mdb.movieInfo({id: request.query.movieId}, function(err, res){
        	if (err !== null) {
        		response.render('pages/error', {
        			opts: opts
        		});
        	} else {
	        	response.render('pages/home', {
					movie: res,
					helper: helper
				});
			}
        });

    }

	return movie;

};