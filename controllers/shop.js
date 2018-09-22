import Shop from '../models/shop';

export const allShops = (req, res) => {
  Shop.find({})
    .then(shops => res.json(shops));
}

export const getShop = (req, res) => {
  Shop.findById(req.params.id)
    .then(shop => res.json(shop));
}

export const addShop = (req, res) => {
  let { name, price, rating, reviews } = req.body;

  const shop = new Shop({
    name, price, rating, reviews
  });

  shop.save()
    .then(() => res.json(shop));
}

export const deleteShop = (req, res) => {
  Shop.findByIdAndRemove(req.params.id)
    .then(shop => res.json(shop.id))
}