module.exports = function(opts) {

    var mdb = require('moviedb')(opts.apiKey);

	var movie = {};

    movie.info = function(response) {

        mdb.movieInfo({id: 11}, function(err, res){
        	console.log(res);
            response.render('pages/home', {
				movie: res,
				opts: opts				
			});
        });

    }

	return movie;

};