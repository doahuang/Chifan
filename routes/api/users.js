const express = require('express');
const router = express.Router();

const User = require('../../models/user');

router.get('/', async (req, res) => {
  const users = await User.find({});
  return res.json(users);
});

router.post('/signup', async (req, res) => {
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

  user.save();
});

module.exports = router;