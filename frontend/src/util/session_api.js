import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {
  GET_ERRORS,
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from './action_types';

// export const setAuthToken = token => {
  // if (token) {
  //   axios.defaults.headers.common['Authorization'] = token;
  // } else {
  //   delete axios.defaults.headers.common['Authorization'];
  // }
// };

export const signupUser = userData => dispatch => {
  axios
    .post('/api/users/signup', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
    
      const decoded = jwtDecode(token);
      let action = setCurrentUser(decoded);
      dispatch(action);
    })
    .catch(err => {
      let action = ({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch(action);
    });
};

export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);

      const decoded = jwtDecode(token);
      let action = setCurrentUser(decoded);
      dispatch(action);
    })
    .catch(err => {
      let action = ({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch(action);      
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');

  dispatch({ type: LOGOUT_CURRENT_USER });
};

export const setCurrentUser = decoded => ({
  type: RECEIVE_CURRENT_USER,
  payload: decoded
});