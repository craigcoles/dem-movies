var config = {};

/*
Variables
*/
config.apiKey = 'dc4940972c268b026150cf7be6f01d11';
config.resourceUrl = 'https://image.tmdb.org/t/p/original';

/*
Helpers
*/
config.getResourceUrl = function(path) {
return config.resourceUrl + path;
}

module.exports = config;