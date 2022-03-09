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
      callbackURL: '/auth/google/callback'
    },
    function (accessToken, refreshToken, profile, cb) {
      new User({googleID: profile.id}).save();
    }
  )
);

// no export is used here intentionally
