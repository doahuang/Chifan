import axios from 'axios';

import {
  RECEIVE_SHOPS,
  RECEIVE_SHOP
} from '../actions/action_types';

const receiveShops = shops => ({
  type: RECEIVE_SHOPS,
  shops
})

const receiveShop = shop => ({
  type: RECEIVE_SHOP,
  shop
})

export const allShops = liked => dispatch => {
  return axios.get(
    '/api/shops', 
    { params: { liked } }
  )
  .then(res => dispatch(receiveShops(res.data)))
}

export const getShop = id => dispatch => {
  return axios.get(`/api/shop/${id}`)
    .then(res => dispatch(receiveShop(res.data)))
}