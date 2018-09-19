import { 
  GET_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/action_types';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};