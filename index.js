var config = require('./config'),
	movie = require('./lib/movie')({ apiKey: config.apiKey }),
	express = require('express'),
	app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  // response.send(config.API_KEY)
  // movie.info();

  var movie = [{
    title: 'Star Wars',
    tagline: 'A long time ago in a galaxy far, far away...'
  }];

  response.render('pages/home', {
    movie: movie
  });

});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
