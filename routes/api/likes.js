import express from 'express';
import passport from 'passport';

import {
  myLikes,
  addLike,
  deleteLike
} from '../../controllers/like';

const router = express.Router();

const jwtAuth = passport.authenticate('jwt', { session: false });

router.get('/', jwtAuth, myLikes);
router.post('/', jwtAuth, addLike);
router.delete('/:id', jwtAuth, deleteLike);

export default router;