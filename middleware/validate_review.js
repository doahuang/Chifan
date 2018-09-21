export default (req, res) => {
  let { rating, text } = req.body;

  rating = Number(rating)
  if (!rating || rating < 1 || rating > 5)
    return res.status(400).json({ msg: 'Rating must be from 1 to 5' });

  if (text.length > 250)
    return res.status(400).json({ msg: 'Text must be 250 characters or less' });
  
}