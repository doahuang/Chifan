import { RECEIVE_CURRENT_USER } from '../util/action_types';

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        id: action.payload.id
      };
    default:
      return state;
  }
};