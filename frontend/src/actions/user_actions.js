import axios from 'axios';

export const currentUser = () => {
  return axios.get('/api/users/current')
    .then(res => res.data);
}

