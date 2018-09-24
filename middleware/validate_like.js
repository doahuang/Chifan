import Shop from '../models/shop';

export default (req, res) => {
  let { shopId } = req.body;

  let shop = await Shop.findById(shopId);
  if (!shop)
    return res.status(400).json({ msg: 'Failed to fetch the shop' });

  let like = await Like.findOne({ shop: shopId, user: req.user });
  if (like)
    return res.status(400).json({ msg: 'Already liked' });
  
}