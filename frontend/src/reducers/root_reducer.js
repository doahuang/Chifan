import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './error_reducer';
import modal from './modal_reducer';
import entities from './entities_reducer';
import filters from './filters_reducer';

export default combineReducers({
  session,
  errors,
  entities,
  modal,
  filters
});