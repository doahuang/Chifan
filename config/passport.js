import passport from 'passport';
import jwtPassport from 'passport-jwt';
import mongoose from 'mongoose';
import keys from '../config/keys';

const { Strategy, ExtractJwt } = jwtPassport;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secret
};

const User = mongoose.model('users');

const jwtStrategy = new Strategy(options, async (payload, done) => {
  const user = await User.findById(payload.id);
  
  return done(null, user);
});

passport.use(jwtStrategy);