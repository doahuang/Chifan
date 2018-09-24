import express from 'express';
// import passport from 'passport';

import {
  allShops,
  getShop,
  addShop,
  // deleteShop
} from '../../controllers/shop';

const router = express.Router();

router.get('/', allShops);
router.get('/:id', getShop);
router.post('/', addShop);
// router.delete('/:id', deleteShop);

// const jwtAuth = passport.authenticate('jwt', { session: false });

// router.post('/', jwtAuth, addShop);
// router.delete('/:id', jwtAuth, deleteShop);

export default router;