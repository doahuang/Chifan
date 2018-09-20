import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import keys from '../config/keys';
import User from '../models/user';

export const currentUser = (req, res) => {
  return res.json(req.user);
}

export const allUsers = async (req, res) => {
  const users = await User.find({});

  res.json(users.map(user => ({
    id: user.id,
    name: user.name
  })));
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: 'User not found' });
  }

  bcrypt.compare(password, user.password, (err, success) => {
    if (success) {
      signToken(user, keys, res);
    } else {
      res.status(400).json({ msg: 'Authentication failed' });
    }
  });
};

export const signup = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ msg: 'User existed' });
  }
  
  user = await new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) throw err;

    user.password = hash;
    user.save()
      .then(() => signToken(user, keys, res))
      .catch(err => res.status(400).json({ msg: 'Failed to create user' }));
  });
};

const signToken = (user, keys, res) => {
  const payload = { 
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    date: user.date
  };

  jwt.sign(
    payload, 
    keys.secret, 
    { expiresIn: 3600 * 24 }, 
    (err, token) => res.json({ token })
  );
};