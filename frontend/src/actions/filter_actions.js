import {
  RECEIVE_FILTERS,
  RECEIVE_FILTER,
  REMOVE_FILTERS
} from './action_types';

export const receiveFilters = filters => ({
  type: RECEIVE_FILTERS,
  filters
});

export const receiveFilter = filter => ({
  type: RECEIVE_FILTER,
  filter
});

export const removeFilters = () => ({
  type: REMOVE_FILTERS
});