import {
  GET_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from './action_types';

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const receiveError = err => ({
  type: GET_SESSION_ERRORS,
  payload: err.response.data
});