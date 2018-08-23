import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

const configStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware()
  );
};

export default configStore;