const express = require('express');
const app = express();
const keys = require('./config/keys');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
  })
);  

const mongoose = require('mongoose');
require('./models/User');

mongoose.connect(keys.mongoURI);

app.get(
  '/auth/google', 
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server runs on locahost:${PORT}`));