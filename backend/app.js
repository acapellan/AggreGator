// import frameworks, libraries, and configurations
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User.js');
require('./services/passport.js');

// connect to database, display error if unsuccessful
mongoose.connect(keys.mongoURI, (err) => {
  if (err) console.log(err);
});

// create the application
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: keys.cookieKeys
  })
);

app.use(passport.initialize());
app.use(passport.session());

// add routes to the application
require('./routes/authRoutes')(app);
require('./routes/apiRoutes')(app);

// set port, display start message
app.listen(process.env.PORT || 5000, () => {
  console.log(`AggreGator application started`);
});

module.exports = app;
