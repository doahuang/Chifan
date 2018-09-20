import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {
  GET_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/action_types';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signupUser = (userData, next) => dispatch => {
  axios
    .post('/api/users/signup', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);

      setAuthToken(token);
    
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      next();
    })
    .catch(err => dispatch({
      type: GET_SESSION_ERRORS,
      payload: err.response.data
    }));
};

export const loginUser = (userData, next) => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);

      setAuthToken(token);

      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      next();
    })
    .catch(err => dispatch({
      type: GET_SESSION_ERRORS,
      payload: err.response.data
    }));
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');

  setAuthToken(false);

  dispatch({ type: LOGOUT_CURRENT_USER });
};

export const setCurrentUser = decoded => ({
  type: RECEIVE_CURRENT_USER,
  payload: decoded
});