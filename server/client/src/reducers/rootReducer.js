import { combineReducers } from 'redux';
import userReducer from './userReducer';
import surveyReducer from './surveyReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  surveys: surveyReducer,
  modal: modalReducer
});

export default rootReducer;