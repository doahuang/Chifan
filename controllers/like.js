import Like from '../models/like';

export const myLikes = (req, res) => {
  Like.find({})
    .then(likes => res.json(likes));
}

export const addLike = (req, res) => {
  let { shop } = req.body;

  const like = new Like({
    shop,
    user: req.user
  });

  like.save()
    .then(() => res.json(like));
}

export const deleteLike = (req, res) => {
  let { shop } = req.body;
  
  Like.findOneAndRemove({ shop })
    .then(like => res.json(like.id))
}