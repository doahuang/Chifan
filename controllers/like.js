import Like from '../models/like';

export const myLikes = (req, res) => {
  Like.find({ user: req.user })
    .then(likes => res.json(likes));
}

export const addLike = async (req, res) => {
  let { shopId } = req.body;

  let like = await Like.findOne({ shop: shopId, user: req.user });
  if (like)
    return res.status(400).json({ msg: 'Already liked' });

  like = new Like({
    shop: req.body.shopId,
    user: req.user
  });

  like.save()
    .then(() => res.json(like))
    .catch(err => res.status(400).json({ msg: 'Failed to like' }));
}

export const deleteLike = (req, res) => {
  Like.findOneAndRemove({ shop: req.params.id, user: req.user })
    .then(like => res.json(like.shop))
    .catch(err => res.status(400).json({ msg: 'Failed to unlike' }));
}