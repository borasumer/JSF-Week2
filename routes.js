const express = require('express');
const app = express();


//import our page routes
const pageRoutes =  require('./routes/pages');

//Register our page routes

app.use('/',pageRoutes);

//Export the changes

module.exports = app;