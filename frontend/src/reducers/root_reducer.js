import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './error_reducer';
import modal from './modal_reducer';
import reviews from './review_reducer';
import shops from './shop_reducer';

export default combineReducers({
  session,
  errors,
  shops,
  reviews,
  modal
});