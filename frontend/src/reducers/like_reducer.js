import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE,
  LOGOUT_CURRENT_USER
} from '../actions/action_types';

export default (state = {}, action) => {
  Object.freeze(state);
  
  let newState = {};
  
  switch (action.type) {
    case RECEIVE_LIKES:
      action.likes.forEach(like => {
        newState[like.shop] = like;
      });
      return newState;
    case RECEIVE_LIKE:
      return Object.assign({}, state, {
        [action.like.shop]: action.like
      });
    case REMOVE_LIKE:
      newState = Object.assign({}, state);
      delete newState[action.shop];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}