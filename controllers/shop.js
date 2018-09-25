import Shop from '../models/shop';
import Like from '../models/like';

export const allShops = (req, res) => {
  // let { liked, user } = req.query;

  // if (!user || !liked || liked === 'false')
  //   return Shop.find({}).then(shops => res.json(shops));

  // Like.find({ user }, { shop: 1 })
  //   .then(likes => {
  //     let shops = likes.map(like => like.shop);

  //     Shop.find({ _id: { $in: shops } })
  //       .then(shops => res.json(shops));
  //   });
  Shop.find({}).then(shops => res.json(shops));
}

export const getShop = (req, res) => {
  Shop.findById(req.params.id)
    .then(shop => {
      if (!shop) next();
      res.json(shop)
    })
    .catch(err => res.status(400).json({ msg: 'Failed to fetch shop' }));
}

export const addShop = (req, res) => {
  let { name, price, rating, reviews, photo, hours, phone, address } = req.body;

  const shop = new Shop({
    name, price, rating, reviews, photo, hours, phone, address
  });

  shop.save()
    .then(() => res.json(shop))
    .catch(err => res.status(400).json({ msg: 'Failed to add shop' }));
}

export const deleteShop = (req, res) => {
  Shop.findByIdAndRemove(req.params.id)
    .then(shop => res.json(shop.id))
    .catch(err => res.status(400).json({ msg: 'Failed to delete shop' }));    
}