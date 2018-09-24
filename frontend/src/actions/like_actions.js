import axios from 'axios';

export const addLike = shopId => {
  return axios.post('/api/likes', { shopId });
}

export const deleteLike = shopId => {
  return axios.delete(`/api/likes/${shopId}`);
}