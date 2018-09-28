import express from 'express';
import passport from 'passport';

import { signup, login } from '../../controllers/session';
import {
  allUsers,
  getUser,
  updateUser
} from '../../controllers/user';

const router = express.Router();

router.get('/', allUsers);
router.post('/signup', signup);
router.post('/login', login);

const jwtAuth = passport.authenticate('jwt', { session: false });
router.get('/:id', jwtAuth, getUser);
router.patch('/:id', jwtAuth, updateUser);

export default router;