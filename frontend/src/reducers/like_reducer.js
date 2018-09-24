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
      for (let like in action.likes) {
        newState[like._id] = like;
      }
      return newState;
    case RECEIVE_LIKE:
      return Object.assign({}, state, {
        [action.like._id]: action.like
      });
    case REMOVE_LIKE:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}