var config = require('../config'),
    helper = require('../helper'),
    mdb = require('moviedb')(process.env.TMDB_API_KEY || config.tmdb),
    movie = {};

movie.movieInfo = function(request, response) {
    mdb.movieInfo({id: request.params.movieID}, function(err, res){
        response.render('pages/movie', {
            movie: res,
            helper: helper
        });
    });
};

movie.tvInfo = function(request, response) {
    mdb.tvInfo({id: request.params.tvID}, function(err, res){
        console.log(res);
        response.render('pages/tv', {
            tv: res,
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

        // SO: NOTES

            // When we make the initial call, we will know how many pages there are. From this
            // we can then generate a random page

            var curPage = res.page,                                             // Current page number (on first request, always 1)
                totalPages = res.total_pages,                                   // Number of total pages
                randomPage = Math.floor(Math.random() * (totalPages - 1) + 1);  // Select a random page from the total pages

            // From the first call, we know we will always land on page 1, but the data will also
            // return the total number of pages for our criteria.
            console.log( 'Page ' + curPage + ' out of ' +  totalPages);

            // Now we know the total number of pages for our criteria, we can randomly select
            // a page if the user wants to keep loading movies from this criteria.
            console.log( randomPage );

            // Now that we have a random page number out of the total pages to choose from, when the user
            // hits a button to give them another movie from the genre, we can use the information from
            // the first request and randomly select a new page
            console.log( '/discover/movie/?with_genres=' + request.params.genres + '&page=' + randomPage );

            // This randomly selects an object from the results, easy days!
            console.log( res.results[Math.floor(Math.random()*res.results.length)] );

        // EO: NOTES

		for (var i in res.results) {
			response.write('<p><a href="/m/' + res.results[i].id + '">' + res.results[i].title + '</a></p>');
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
