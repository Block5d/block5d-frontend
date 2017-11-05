// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/../dist'));
// Start the app by listening on the default
// Heroku port
var PORT = process.env.PORT || process.argv[2] || config.PORT || 3000;

app.listen(PORT, ()=> {
    console.log("Server started on port %d...", PORT);
  });