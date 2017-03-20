var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var businesses = require('./app/apiRoutes/businesses');
var categories = require('./app/apiRoutes/categories');
var offers = require('./app/apiRoutes/offers');
var config = require('./app/config/database');
var Promise = require("bluebird");

mongoose.Promise = Promise;

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

//Connect to MongoDB
mongoose.connect(config.db.development);
// mongoose.connect('mongodb://localhost:27017/bizfinder');
//On successful database connection
mongoose.connection.on('connected', () => {
  console.log("Connected to database: " + config.db.development);
  // console.log("Connected!");
});
//On database connection Error
mongoose.connection.on('error', (err) => {
  console.log("Database error: " + err);
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

//Api routes
app.use('/api', businesses);
app.use('/api', categories);
app.use('/api', offers)


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
