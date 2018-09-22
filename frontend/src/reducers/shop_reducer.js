import {
  RECEIVE_SHOPS,
  RECEIVE_SHOP
} from '../actions/action_types';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SHOPS:
      return action.shops;
    case RECEIVE_SHOP:
      return [action.shop];
    default:
      return state;
  }
};