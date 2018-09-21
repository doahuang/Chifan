import axios from 'axios';

// import { RECEIVE_CURRENT_USER } from './action_types';
// import { receiveError } from './ui_error';

// const receiveUser = user => ({
//   type: RECEIVE_CURRENT_USER,
//   user
// });

export const getUser = id => {
  return axios.get(`/api/users/${id}`)
    .then(res => res.data);
}

// export const getUser = id => dispatch => {
//   return axios.get(`/api/users/${id}`)
//     .then(res => dispatch(receiveUser(res.data)))
//     .catch(err => dispatch(receiveError(err)))
// }

export const updateUser = user => {
  return axios.patch(`/api/users/${user.id}`, user);
}