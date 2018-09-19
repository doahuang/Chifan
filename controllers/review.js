import Review from '../models/review';

export const myReviews = async (req, res) => {
  await Review.find({ user: req.user })
    .then(reviews => res.json(reviews));
}

export const addReview = async (req, res) => {
  const { rating, text } = req.body;
  if (!rating) return res.status(400).json({ msg: 'Rating is required' });

  let review = await new Review({
    user: req.user,
    rating, 
    text
  });
  
  review.save()
    .then(() => res.json(review))
    .catch(err => res.status(400).json({ msg: 'Failed to add review' }));
}

export const getReview = async (req, res) => {
  await Review.findById(req.params.id)
    .then(review => {
      if (!review) {
        return res.status(400).json({ msg: 'Failed to fetch review' });
      }
      res.json(review);
    })
    .catch(err => res.status(400).json({ msg: 'Failed to fetch review' }));
}

export const updateReview = async (req, res) => {
  await Review.findOneAndUpdate({ _id: req.params.id, user: req.user }, req.body)
    .then(async () => {
      let review = await Review.findById(req.params.id);
      if (!review) {
        return res.status(400).json({ msg: 'Failed to update review' });
      }
      res.json(review);
    })
    .catch(err => res.status(400).json({ msg: 'Failed to update review' }));
}

export const deleteReview = async (req, res) => {
  await Review.findOneAndRemove({ _id: req.params.id, user: req.user })
    .then(review => res.json(review.id))
    .catch(err => res.status(400).json({ msg: 'Failed to delete review' }));
}