import { combineReducers } from 'redux';
import userReducer from './userReducer';
import surveyReducer from './surveyReducer';

const rootReducer = combineReducers({
  user: userReducer,
  surveys: surveyReducer
});

export default rootReducer;