import axios from 'axios';

export const submitSurvey = values => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  return res;
};

export const FETCH_SURVEYS = 'FETCH_SURVEYS';
export const FETCH_SURVEY = 'FETCH_SURVEY';

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, surveys: res.data });
};