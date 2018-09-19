import express from 'express';
import passport from 'passport';
import { 
  currentUser,
  allUsers, 
  signup,
  login,
} from '../../controllers/user';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

const jwtAuth = passport.authenticate('jwt', { session: false });

router.get('/', jwtAuth, allUsers);
router.get('/current', jwtAuth, currentUser);

export default router;