// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
// var routes = require("./app/routing/htmlRoutes");
// middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/', routes);
// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app)

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/routing/htmlRoutes/"));
// });
// Routes
// There will be multiple html routes and api routes referenced from distinct files

// there should be logic here to take in JSON post sent from user form and store as new user

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

