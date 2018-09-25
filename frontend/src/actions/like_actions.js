import axios from 'axios';

import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from './action_types';
import { receiveError } from './ui_error';

const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = shopId => ({
  type: REMOVE_LIKE,
  shopId
});

export const myLikes = () => dispatch => {
  return axios.get('/api/likes')
    .then(res => dispatch(receiveLikes(res.data)));
}

export const addLike = shopId => dispatch => {
  return axios.post('/api/likes', { shopId })
    .then(res => dispatch(receiveLike(res.data)))
    .catch(err => dispatch(receiveError(err)))
}

export const deleteLike = shopId => dispatch => {
  return axios.delete(`/api/likes/${shopId}`)
    .then(res => dispatch(removeLike(res.data)))
    .catch(err => dispatch(receiveError(err)))
}