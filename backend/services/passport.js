const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
let keys;

// keys are not committed to repo, fake keys are loaded to allow automated tests
try {
  keys = require('../config/keys');
} catch (err) {
  keys = require('../config/fakeKeys');
}

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