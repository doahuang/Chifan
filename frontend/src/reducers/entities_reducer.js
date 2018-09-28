import { combineReducers } from 'redux';
import shops from './shop_reducer';
import likes from './like_reducer';

export default combineReducers({
  shops,
  likes
});