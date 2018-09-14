import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import keys from '../config/keys';
import User from '../models/user';

export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

export const getUser = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ err: 'User not found' });
  }

  bcrypt.compare(password, user.password, (err, success) => {
    if (success) {
      signToken(user, keys, res);
    } else {
      res.status(400).json({ err: 'Authentication failed' });
    }
  });
};

export const addUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ err: 'User existed' });
  }

  const { name, email, password } = req.body;
  user = await new User({
    name,
    email,
    password
  });

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) throw err;

    user.password = hash;
    user.save()
      .then(() => signToken(user, keys, res))
      .catch(err => res.json(err));
  });
};

const signToken = (user, keys, res) => {
  const payload = { id: user.id };

  jwt.sign(payload, keys.secret, { expiresIn: 3600 * 24 }, (err, token) => {
    res.json({ token });
  });
};