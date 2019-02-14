// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// There will be multiple html routes and api routes referenced from distinct files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// there should be logic here to take in JSON post sent from user form and store as new user
