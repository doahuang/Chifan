import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import keys from '../config/keys';
import User from '../models/user';

const signToken = (user, keys, res) => {
  const payload = {
    id: user.id
  };

  jwt.sign(
    payload,
    keys.secretKey,
    { expiresIn: 3600 * 24 },
    (err, token) => res.json({ token })
  );
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) 
    return res.status(400).json({ msg: 'Invalid email or password' });

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
  let { name, email, password } = req.body;
  
  if (!name || !email || !password || 
      name.length > 20 || email.length > 20 || password.length > 20)
    return res.status(400).json({ msg: 'Invalid name or email or password' });

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: 'User email taken' });
  }
  
  user = new User({
    name, email, password
  });

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) throw err;

    user.password = hash;
    user.save()
      .then(() => signToken(user, keys, res))
      .catch(err => res.status(400).json({ msg: 'Failed to create user' }));
  });
};