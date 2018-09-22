import express from 'express';
import passport from 'passport';

import {
  myLikes,
  addLike,
  deleteLike
} from '../../controllers/like';

const router = express.Router();

router.get('/', myLikes);

const jwtAuth = passport.authenticate('jwt', { session: false });

router.post('/', jwtAuth, addLike);
router.delete('/', jwtAuth, deleteLike);

export default router;