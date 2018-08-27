import axios from 'axios';

export const submitSurvey = values => dispatch => {
  axios.post('/api/surveys', values);
};

export const FETCH_SURVEYS = 'FETCH_SURVEYS';
export const REMOVE_SURVEY = 'REMOVE_SURVEY';

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, surveys: res.data });
};

export const removeSurvey = id => dispatch => {
  axios.delete(`/api/surveys/${id}`);
};