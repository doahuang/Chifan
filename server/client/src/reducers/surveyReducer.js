import { 
  FETCH_SURVEYS, 
  REMOVE_SURVEY
} from '../actions/surveyAction';

const surveyReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case FETCH_SURVEYS:
      return action.surveys;
    case REMOVE_SURVEY:
      return;
    default:
      return state;
  }
};

export default surveyReducer;