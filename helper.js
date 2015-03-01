var helper = {};

helper.resourceUrl = 'https://image.tmdb.org/t/p/original';

/*
  Helpers
*/
helper.getResourceUrl = function(path) {
  return helper.resourceUrl + path;
}

module.exports = helper;