import passport from 'passport';
import jwtPassport from 'passport-jwt';
import mongoose from 'mongoose';

import keys from '../config/keys';

const { Strategy, ExtractJwt } = jwtPassport;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretKey
};

const User = mongoose.model('users');

const jwtStrategy = new Strategy(options, (payload, done) => {
  User.findById(payload.id)
    .then(user => done(null, user));
});

passport.use(jwtStrategy);