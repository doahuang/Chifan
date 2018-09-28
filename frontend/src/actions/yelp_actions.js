import axios from 'axios';

import { RECEIVE_SHOPS } from '../actions/action_types';
import { receiveError } from './ui_error';

const receiveShops = ({ businesses}) => ({
  type: RECEIVE_SHOPS,
  shops: businesses
});

export const callYelp = params => dispatch => {
  return axios.get('/api/yelp', { params })
    .then(res => dispatch(receiveShops(res.data)))
    .catch(err => dispatch(receiveError(err)))
}