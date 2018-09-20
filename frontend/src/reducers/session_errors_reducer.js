import { 
  GET_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/action_types';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case GET_SESSION_ERRORS:
      return action.err;
    case CLEAR_SESSION_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};