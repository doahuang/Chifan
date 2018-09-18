import express from 'express';
import {
  allReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
} from '../../controllers/review';

const router = express.Router();

router.get('/', allReviews);
router.post('/', addReview);
router.get('/:id', getReview);
router.patch('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;