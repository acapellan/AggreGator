// import express framework
const express = require('express');

// run passport service for authentication
require('./services/passport.js');

// create the application
const app = express();

// add routes to the application
require('./routes/authRoutes')(app);
require('./routes/apiRoutes')(app);

// set port, display start message
app.listen(process.env.PORT || 5000, () => {
  console.log(`AggreGator application started`);
});

module.exports = app;
