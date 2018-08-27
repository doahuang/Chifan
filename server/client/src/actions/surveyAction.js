import axios from 'axios';

export const RECEIVE_SURVEY = 'RECEIVE_SURVEY';
export const FETCH_SURVEYS = 'FETCH_SURVEYS';
export const REMOVE_SURVEY = 'REMOVE_SURVEY';

export const receiveSurvey = survey => async dispatch => {
  const res = await axios.post('/api/surveys', survey);
  dispatch({ type: RECEIVE_SURVEY, survey: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, surveys: res.data });
};

export const removeSurvey = id => async dispatch => {
  const res = await axios.delete(`/api/surveys/${id}`);
  dispatch({ type: REMOVE_SURVEY, id: res.data });
};