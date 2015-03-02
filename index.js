var config = require('./config'),
	movie = require('./lib/movie'),
	express = require('express'),
	words = require('./lib/words'),
	app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('pages/home', {
		words: words.getList(10)
	});
});

app.get('/movie', movie.info);
app.get('/popular', movie.list);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
