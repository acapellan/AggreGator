// import frameworks, libraries, and configurations
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User.js');
require('./services/passport.js');

// connect to database
mongoose.connect(keys.mongoURI, (err) => {
  if (err) console.log(err);
  else console.log('Mongodb is connected');
});

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
