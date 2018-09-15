import axios from 'axios';
import jwtDecode from 'jwt-decode';

// export const setAuthToken = token => {
  // if (token) {
  //   axios.defaults.headers.common['Authorization'] = token;
  // } else {
  //   delete axios.defaults.headers.common['Authorization'];
  // }
// };

export const signupUser = async userData => {
  const res = await axios.post('/api/users/signup', userData);

  const { token } = res.data;
  localStorage.setItem('jwtToken', token);

  const decoded = jwtDecode(token);
  setCurrentUser(decoded);
};

export const loginUser = async userData => {
  const res = await axios.post('/api/users/login', userData);

  const { token } = res.data;
  localStorage.setItem('jwtToken', token);

  const decoded = jwtDecode(token);
  setCurrentUser(decoded);
};

export const logoutUser = () => {
  localStorage.removeItem('jwtToken');

  setCurrentUser({});
};

export const setCurrentUser = decoded => {
  return {
    type: null,
    payload: decoded
  }
};