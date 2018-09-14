import express from 'express';
import passport from 'passport';
import { 
  allUsers, 
  signup,
  login,
} from '../../controllers/user';

const router = express.Router();

router.get('/', allUsers);
router.post('/signup', signup);
router.post('/login', login);

const jwtAuth = passport.authenticate('jwt', { session: false });
const currentUser = (req, res) => {
  const { id, name, email, date } = req.user;
  res.json({
    id,
    name,
    email, 
    date
  });
};
router.get('/current', jwtAuth, currentUser);

export default router;