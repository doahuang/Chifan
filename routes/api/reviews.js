import express from 'express';
import passport from 'passport';

import {
  myReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
} from '../../controllers/review';

const router = express.Router();

router.get('/:id', getReview);

const jwtAuth = passport.authenticate('jwt', { session: false });

router.get('/', jwtAuth, myReviews);
router.post('/', jwtAuth, addReview);
router.patch('/:id', jwtAuth, updateReview);
router.delete('/:id', jwtAuth, deleteReview);

export default router;