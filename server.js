const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// This will handle all security stuff:
const passport = require('./strategies/user-strategy.js');
// This is a more generic file that handles cookies:
const sessionConfig = require('./modules/session-middleware.js');

// Passport session config and init:
app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());

require('dotenv').load();
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/accessory-research");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
