const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.id,
      clientSecret: keys.google.secret,
      callbackURL: '/auth/google/callback'
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(`accessToken: ${accessToken}`);
      console.log(`refreshToken: ${refreshToken}`);
      console.log(JSON.stringify(profile, null, 2));
    }
  )
);

// no export is used here intentionally