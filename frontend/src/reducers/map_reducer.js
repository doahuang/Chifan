import { RECEIVE_SHOPS } from '../actions/action_types';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SHOPS:
      return action.center;
    default:
      return state;
  }
};