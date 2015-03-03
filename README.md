# Dem Movies

A simple but smart app that is running Node.js and using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com:craigcoles/dem-movies.git # or clone your own fork
cd dem-movies
npm install
cp -i config.js.example config.js # Create a config based on the example
set DEBUG=dem-movies & node bin/www
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
git@heroku.com:dem-movies.git
```