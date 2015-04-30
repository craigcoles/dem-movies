var helper = {};

helper.resourceUrl = 'https://image.tmdb.org/t/p/w500';

/*
  Helpers
*/
helper.getResourceUrl = function(path) {
	if (path === null) {
        return 'http://i.imgur.com/EAJsPh5.jpg';
    } else {
        return helper.resourceUrl + path;
    }
}

helper.getMovieUrl = function(movieId) {
	return "/movie?movieId=" + movieId;
}

module.exports = helper;