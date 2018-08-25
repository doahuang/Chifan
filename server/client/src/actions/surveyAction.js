import axios from 'axios';

export const submitSurvey = values => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  return res;
};