const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Leo'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Leo'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'This is the help page',
    name: 'Leo'
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'No location provided'
    });
  }

  // geocode(req.query.address, (error, { latitude, longitude, location } = {} ) => {
  //   if (error) {
  //     return res.send({ error })
  //   }

  //   forecast(latitude, longitude, (error, forecastData) => {
  //     if (error) {
  //       return res.send({ error })
  //     }

      res.send({
        forecast: 'Its sunny and quite nice to be honest fam',
        location: 'London',
        address: req.query.address
      })
    })


// req.query is a way of accessing additional values at the end of the url
app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    });
  };
  res.send({
    products: []
  });
});

// 404 pages, !this must stay at the bottom of the app.get files!
app.get('/help/*', (req, res) => {
  res.render('notFoundPage', {
    title: 'Error',
    notFoundMessage: 'Help article not found'
  });
});

// this must stay the the bottom of the 404s
app.get('*', (req, res) => {
  res.render('notFoundPage', {
    title: 'Error: 404',
    notFoundMessage: 'Page not found'
  });
});

// this starts up the server on a specific port

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});


// app.get lets you configure what the server does at a certain url
// get method takes in two arguments
// 1) the route (partial url)
// 2) the second arg is the function (describes what to send back to user)
// gets called with two arguments
// req = object containing information aboiut incoming request to the server
// res = response, contains methods allowing us to customise what we're gonna send back to requester
