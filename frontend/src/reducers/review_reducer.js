import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../util/action_types';

export default (state = {}, action) => {
  Object.freeze(state);

  let newState = {};
  switch (action.type) {
    case RECEIVE_REVIEWS:
      action.reviews.forEach(review => {
        newState[review._id] = review;
      });
      return newState;
    case RECEIVE_REVIEW: 
      return Object.assign({}, state, {
        [action.review._id]: action.review
      });
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};