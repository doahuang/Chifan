import {
  GET_UI_ERRORS,
  CLEAR_UI_ERRORS
} from './action_types';

export const clearErrors = () => ({
  type: CLEAR_UI_ERRORS
});

export const receiveError = err => ({
  type: GET_UI_ERRORS,
  payload: err.response.data
});