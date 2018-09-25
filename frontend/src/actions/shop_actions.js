import axios from 'axios';

import {
  RECEIVE_SHOPS,
  RECEIVE_SHOP
} from '../actions/action_types';
import { receiveError } from './ui_error';

const receiveShops = shops => ({
  type: RECEIVE_SHOPS,
  shops
})

const receiveShop = shop => ({
  type: RECEIVE_SHOP,
  shop
})

export const allShops = params => dispatch => {
  return axios.get('/api/shops', { params })
    .then(res => dispatch(receiveShops(res.data)))
    .catch(err => dispatch(receiveError(err)));
}

export const getShop = id => dispatch => {
  return axios.get(`/api/shop/${id}`)
    .then(res => dispatch(receiveShop(res.data)))
    .catch(err => dispatch(receiveError(err)));
}