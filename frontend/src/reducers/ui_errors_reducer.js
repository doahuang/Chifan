import {
  GET_UI_ERRORS,
  CLEAR_UI_ERRORS
} from '../actions/action_types';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case GET_UI_ERRORS:
      return action.payload;
    case CLEAR_UI_ERRORS:
      return [];
    default:
      return state;
  }
}