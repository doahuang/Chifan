import { 
  RECEIVE_SURVEY,
  FETCH_SURVEYS, 
  REMOVE_SURVEY
} from '../actions/surveyAction';

const surveyReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case FETCH_SURVEYS:
      return action.surveys;
    case RECEIVE_SURVEY:
      return [...state, action.survey];
    case REMOVE_SURVEY:
      return state.filter(el => el._id !== action.id);
    default:
      return state;
  }
};

export default surveyReducer;