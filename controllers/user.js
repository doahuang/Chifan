import User from '../models/user';
import validator from '../middleware/validate_user';

export const allUsers = (req, res) => {
  User.find({}).then(users => {
    users = users.map(user => ({
      id: user.id,
      name: user.name
    }));
    res.json(users);
  });
};

export const getUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) next();

      const { id, name, email, date } = user;
      return res.json({
        id, name, email, date
      });
    })
    .catch(err => res.status(400).json({ msg: 'Failed to fetch user' }));
}

export const updateUser = async (req, res) => {
  let errs = await validator(req, res);
  if (errs) return errs;

  //it's me, and update name or email no conflicts
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ msg: 'Failed to update user' }));
}