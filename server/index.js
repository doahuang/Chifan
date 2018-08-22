const express = require('express');
const keys = require('./config/keys');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy());

const mongoose = require('mongoose');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);