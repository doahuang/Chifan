import express from 'express';
import { 
  getUsers, 
  addUser,
  getUser,
} from '../../controllers/user';

const router = express.Router();

router.get('/', getUsers);
router.post('/signup', addUser);
router.post('/login', getUser);

export default router;