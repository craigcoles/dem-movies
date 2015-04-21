var helper = {};

helper.resourceUrl = 'https://image.tmdb.org/t/p/w500';

/*
  Helpers
*/
helper.getResourceUrl = function(path) {
  return helper.resourceUrl + path;
}

helper.getMovieUrl = function(movieId) {
	return "/movie?movieId=" + movieId;
}

module.exports = helper;