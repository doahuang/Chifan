import express from 'express';
// import passport from 'passport';
import { 
  getUser,
  updateUser,
  allUsers, 
  signup,
  login,
} from '../../controllers/user';

const router = express.Router();

router.get('/', allUsers);
router.get('/:id', getUser);
router.post('/signup', signup);
router.post('/login', login);

// const jwtAuth = passport.authenticate('jwt', { session: false });
router.patch('/:id', updateUser);

export default router;