import express from 'express';
import { 
  getUsers, 
  addUser 
} from '../../controllers/user';

const router = express.Router();

router.get('/', getUsers);
router.post('/signup', addUser);

export default router;