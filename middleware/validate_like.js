import Like from '../models/like';

export default async (req, res) => {
  let { shopId } = req.body;

  let like = await Like.findOne({ shop: shopId, user: req.user });
  if (like)
    return res.status(400).json({ msg: 'Already liked' });
  
}