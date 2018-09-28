import users from './users';
import likes from './likes';
import yelpAPI from './yelp_api';

export default app => {
  app.use('/api/users', users);
  app.use('/api/likes', likes);
  //yelp API
  app.use('/api/yelp', yelpAPI);
};