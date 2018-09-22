import express from 'express';

import {
  allShops,
  getShop,
  addShop,
  deleteShop
} from '../../controllers/shop';

const router = express.Router();

router.get('/', allShops);
router.get('/:id', getShop);
router.post('/', addShop);
router.delete('/:id', deleteShop);

export default router;