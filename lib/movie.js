module.exports = function(opts) {

    var mdb = require('moviedb')(opts.apiKey);

	var movie = {};

    movie.info = function() {

        mdb.movieInfo({id: 11}, function(err, res){
            console.log('--------','popular');
            console.log(res);
        });

    }

	return movie;

};