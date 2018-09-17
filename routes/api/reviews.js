import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.json({ reviews: 'all' }));
router.get('/:id', (req, res) => res.json({ review: req.params.id }));
router.post('/', (req, res) => res.json({ post: true }));

export default router;