var config = {};

/*
Variables
*/
config.resourceUrl = 'https://image.tmdb.org/t/p/original';

/*
Helpers
*/
config.getResourceUrl = function(path) {
return config.resourceUrl + path;
}

module.exports = config;