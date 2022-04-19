const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.id,
      clientSecret: keys.google.secret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new User({
        googleID: profile.id,
        nomen: {
          first: profile.name.givenName,
          last: profile.name.familyName
        },
        email: profile.emails[0].value
      });
      newUser.save();

      done(null, newUser);
    }
  )
);

// Called during login, user info is serialized and sent from the server to the browser. The user.id
// is the _id from mongoDB, it is serialized instead of the Google ID number since other auth
// strategies may be used, users will be uniquely identified in the app by their mongoDB id number.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Called when a user has already logged in and is requesting information from the API. A cookie
// is deserialized and used to lookup user info from mongoDB.
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// no export is used here intentionally
