import {
  GET_ERRORS,
  CLEAR_ERRORS
} from './action_types';

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveError = err => ({
  type: GET_ERRORS,
  payload: err.response.data
});