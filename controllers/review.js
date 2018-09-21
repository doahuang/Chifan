import Review from '../models/review';
import validator from '../middleware/validate_review';

export const myReviews = (req, res) => {
  Review.find({ user: req.user })
    .then(reviews => res.json(reviews));
}

export const addReview = (req, res) => {
  let errs = validator(req, res);
  if (errs) return errs;
  
  let { rating, text } = req.body;
  const review = new Review({
    user: req.user,
    rating,
    text
  });
  
  review.save()
    .then(() => res.json(review))
    .catch(err => res.status(400).json({ msg: 'Failed to add review' }));
}

export const getReview = (req, res) => {
  Review.findById(req.params.id)
    .then(review => {
      if (!review) next();
      
      res.json(review);
    })
    .catch(err => res.status(400).json({ msg: 'Failed to fetch review' }));
}

export const updateReview = (req, res) => {
  let errs = validator(req, res);
  if (errs) return errs;
  
  Review.findOneAndUpdate({ _id: req.params.id, user: req.user }, req.body)
    .then(async review => {
      review = await Review.findById(req.params.id);
      if (!review) next();

      res.json(review);
    })
    .catch(err => res.status(400).json({ msg: 'Failed to update review' }));
}

export const deleteReview = (req, res) => {
  Review.findOneAndRemove({ _id: req.params.id, user: req.user })
    .then(review => res.json(review.id))
    .catch(err => res.status(400).json({ msg: 'Failed to delete review' }));
}