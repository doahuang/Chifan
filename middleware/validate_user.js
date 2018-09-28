import User from '../models/user';
import bcrypt from 'bcryptjs';

export default async (req, res) => {
  const { email, password } = req.body;

  if (password) {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
  }

  if (password !== undefined && !password)
    return res.status(400).json({ msg: 'Invalid password' })

  if (email !== undefined && !email)
    return res.status(400).json({ msg: 'Invalid email' });

  //make sure current user is updating
  if (req.user.id !== req.params.id)
    return res.status(400).json({ msg: 'Unauthorized' });

  //try to find a user by new email
  let user = await User.findOne({ email: req.body.email });

  //if found user and not self, throw error
  if (user && user.id !== req.user.id)
    return res.status(400).json({ msg: 'User email taken' });

  //if found myself and email unchanged, return self
  if (user && user.email === req.body.email)
    return res.json(user);
  
}