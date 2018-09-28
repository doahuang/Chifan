import {
  RECEIVE_FILTERS,
  RECEIVE_FILTER,
  REMOVE_FILTERS
} from '../actions/action_types';

export default (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_FILTERS:
      return action.filters;
    case RECEIVE_FILTER:
      const filter = action.filter;
      const status = state[filter];
      return {
        ...state,
        [filter]: !status
      };
    case REMOVE_FILTERS:
      return {};
    default:
      return state;
  }
}