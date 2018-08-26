import { 
  FETCH_SURVEYS, 
  FETCH_SURVEY
} from '../actions/surveyAction';

const surveyReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case FETCH_SURVEYS:
      return action.surveys;
    case FETCH_SURVEY:
      return;
    default:
      return state;
  }
};

export default surveyReducer;