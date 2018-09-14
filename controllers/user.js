import bcrypt from 'bcryptjs';
import User from '../models/user';

export const getUsers = async (req, res) => {
  const users = await User.find({});
  return res.json(users);
};

export const getUser = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ err: 'User not found' });
  }

  bcrypt.compare(password, user.password, (err, success) => {
    if (success) {
      return res.json({ msg: 'Welcome' });
    } else {
      return res.status(400).json({ err: 'Authentication failed' });
    }
  });
};

export const addUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ err: 'User existed' });
  }

  const { name, email, password } = req.body;
  user = new User({
    name,
    email,
    password
  });

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) throw err;

    user.password = hash;
    user.save();
  });
};
