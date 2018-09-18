import Review from '../models/review';

export const allReviews = async (req, res) => {
  await Review.find({})
    .then(reviews => res.json(reviews));
}

export const addReview = async (req, res) => {
  const { rating, text } = req.body;
  if (!rating) return res.status(400).json({ msg: 'Rating is required' });

  let review = await new Review({
    rating, 
    text
  });

  review.save()
    .then(() => res.json(review))
    .catch(err => res.status(400).json({ msg: 'Failed to write review' }));
}

export const getReview = async (req, res) => {
  await Review.findById(req.params.id)
    .then(review => res.json(review))
    .catch(err => res.status(400).json({ msg: 'Failed to fetch review' }));
}

export const updateReview = async (req, res) => {
  await Review.findByIdAndUpdate(req.params.id, req.body)
    .then(() => getReview(req, res))
    .catch(err => res.status(400).json({ msg: 'Failed to update review' }));
}

export const deleteReview = async (req, res) => {
  await Review.findByIdAndRemove(req.params.id)
    .then(review => res.json(review.id))
    .catch(err => res.status(400).json({ msg: 'Failed to delete review' }));
}