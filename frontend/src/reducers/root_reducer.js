import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './error_reducer';
import reviews from './review_reducer';
import modal from './modal_reducer';

export default combineReducers({
  session,
  errors,
  reviews,
  modal
});