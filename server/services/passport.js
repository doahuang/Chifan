const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id)
    .then(user => cb(null, user));
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, cb) => {
    User.findOne({ googleId: profile.id })
      .then(user => {
        if (user) {
          cb(null, user);
        } else {
          new User({ googleId: profile.id }).save()
            .then(user => cb(null, user));
        }
      })
  })
);  