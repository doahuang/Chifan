import * as reviewAPI from '../util/review_api';

import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from './action_types';

import { receiveError } from './ui_error';

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

const removeReview = id => ({
  type: REMOVE_REVIEW,
  id
})

export const fetchReviews = () => dispatch => {
  reviewAPI.getReviews()
    .then(res => dispatch(receiveReviews(res.data)));
}

export const fetchReview = id => dispatch => {
  reviewAPI.getReview(id)
    .then(res => dispatch(receiveReview(res.data)))
    .catch(err => dispatch(receiveError(err)))
}

export const addReview = (review, next) => dispatch => {
  reviewAPI.addReview(review)
    .then(res => {
      dispatch(receiveReview(res.data))
      if (next) next();
    })
    .catch(err => dispatch(receiveError(err)));
}

export const updateReview = (review, next) => dispatch => {
  reviewAPI.updateReview(review)
    .then(res => {
      dispatch(receiveReview(res.data))
      if (next) next();
    })
    .catch(err => dispatch(receiveError(err)));
}

export const deleteReview = id => dispatch => {
  reviewAPI.deleteReview(id)
    .then(res => dispatch(removeReview(res.data)))
    .catch(err => dispatch(receiveError(err)));
}

