import { combineReducers } from 'redux';
import reviews from './review_reducer';
import shops from './shop_reducer';

export default combineReducers({
  shops,
  reviews
});