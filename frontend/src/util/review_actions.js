import * as reviewAPI from './review_api';

import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  GET_ERRORS
} from './action_types';

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

const receiveError = err => ({
  type: GET_ERRORS,
  payload: err.response.data
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

export const addReview = review => dispatch => {
  reviewAPI.addReview(review)
    .then(res => dispatch(receiveReview(res.data)))
    .catch(err => dispatch(receiveError(err)));
}

export const updateReview = review => dispatch => {
  reviewAPI.updateReview(review)
    .then(res => dispatch(receiveReview(res.data)))
    .catch(err => dispatch(receiveError(err)));
}

export const deleteReview = id => dispatch => {
  reviewAPI.deleteReview(id)
    .then(res => dispatch(removeReview(res.data)))
    .catch(err => dispatch(receiveError(err)));
}

