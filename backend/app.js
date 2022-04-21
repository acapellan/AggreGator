// import frameworks, libraries, and configurations
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/User');
require('./models/Topic');
require('./services/passport');

// connect to database, create anonymous user account if it does not exist
mongoose.connect(keys.mongoURI, async err => {
  if (err) {
    console.log(err);
  } else {
    const User = mongoose.model('users');

    // search database for the anonymous user account
    const anonymousUser = await User.findOne({ googleID: 'anonymous' });

    if (!anonymousUser) {
      const user = await new User({
        googleID: 'anonymous',
        nomen: { first: 'Anonymous', last: 'User' },
        email: 'no-email-entered'
      });
      user.save();
    }
  }
});

// create the application
const app = express();

// enable parsing of post request bodies
app.use(bodyParser.json());

// define the length of a client session
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
require('./routes/clientRoutes')(app);

// set port, display start message
app.listen(process.env.PORT || 5000, () => {
  console.log(`AggreGator application started`);
});

module.exports = app;
