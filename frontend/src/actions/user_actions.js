import axios from 'axios';

import { receiveError, clearErrors } from './ui_error';

export const getUser = id => {
  return axios.get(`/api/users/${id}`);
}

export const updateUser = (user, next) => dispatch => {
  return axios.patch(`/api/users/${user.id}`, user)
    .then(res => {
      dispatch(clearErrors())
      next();
    })
    .catch(err => dispatch(receiveError(err)))
}