import Review from '../models/review';

export const allReviews = async (req, res) => {
  const reviews = await Review.find({});

  res.json(reviews);
}

export const addReview = async (req, res) => {
  const { rating, text } = req.body;

  let review = await new Review({
    rating, 
    text
  });

  review.save()
    .then(() => res.json(review))
    .catch(err => res.json(err));
}

export const getReview = async (req, res) => {
  await Review.findById(req.params.id)
    .then(review => res.json(review))
    .catch(err => res.json(err));
}

export const updateReview = async (req, res) => {
  await Review.findByIdAndUpdate(req.params.id, req.body)
    .then(() => getReview(req, res))
    .catch(err => res.json(err));
}

export const deleteReview = async (req, res) => {
  await Review.findByIdAndRemove(req.params.id)
    .then(review => res.json(review))
    .catch(err => res.json(err));
}