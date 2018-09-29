import axios from 'axios';

import { RECEIVE_SHOPS } from '../actions/action_types';
import { receiveError } from './ui_error';

const receiveShops = ({ businesses, region: { center }}) => ({
  type: RECEIVE_SHOPS,
  shops: businesses,
  center
});

export const callYelp = params => dispatch => {
  return axios.get('/api/yelp', { params })
    .then(res => dispatch(receiveShops(res.data)))
    .catch(err => dispatch(receiveError(err)))
}