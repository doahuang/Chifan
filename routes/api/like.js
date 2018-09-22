import express from 'express';

import {
  myLikes,
  addLike,
  deleteLike
} from '../../controllers/like';

const router = express.Router();

router.get('/', myLikes);
router.post('/', addLike);
router.delete('/', deleteLike);

export default router;