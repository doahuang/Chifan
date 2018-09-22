import express from 'express';
// import passport from 'passport';

import {
  allShops,
  getShop,
  addShop,
  deleteShop
} from '../../controllers/shop';

const router = express.Router();

router.get('/', allShops);
router.get('/:id', getShop);

// const jwtAuth = passport.authenticate('jwt', { session: false });

// router.post('/', jwtAuth, addShop);
// router.delete('/:id', jwtAuth, deleteShop);
router.post('/', addShop);
router.delete('/:id', deleteShop);

export default router;