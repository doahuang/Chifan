import express from 'express';
import axios from 'axios';
import keys from '../../config/keys';

const router = express.Router();

const yelpAPI = params => {
  const apiKey = keys.yelpKey;
  const yelp = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses'
  });

  yelp.defaults.headers.common['Authorization'] = `bearer ${apiKey}`;

  return yelp('/search', { params });
};

router.get('/', (req, res) => {
  const params = req.query;

  yelpAPI(params)
    .then(done => res.json(done.data))
    .catch(err => res.json({}));
});

export default router;