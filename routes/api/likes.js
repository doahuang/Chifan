import express from 'express';
import passport from 'passport';

import {
  allLikes,
  addLike,
  deleteLike
} from '../../controllers/like';

const router = express.Router();

router.get('/', allLikes);

const jwtAuth = passport.authenticate('jwt', { session: false });

router.post('/', jwtAuth, addLike);
router.delete('/:id', jwtAuth, deleteLike);

export default router;