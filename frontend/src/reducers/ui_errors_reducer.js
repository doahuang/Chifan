import {
  GET_UI_ERRORS,
  CLEAR_UI_ERRORS, 
  LOGOUT_CURRENT_USER
} from '../actions/action_types';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case GET_UI_ERRORS:
      return action.err;
    case CLEAR_UI_ERRORS:
      return [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
}