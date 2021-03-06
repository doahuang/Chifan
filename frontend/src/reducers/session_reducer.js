import { 
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/action_types';

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        id: action.user.id
      };
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
};