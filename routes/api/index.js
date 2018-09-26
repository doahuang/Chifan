import users from './users';
import reviews from './reviews';
import likes from './likes';
import shops from './shops';

import yelpAPI from './yelp_api';

export default app => {
  app.use('/api/users', users);
  app.use('/api/reviews', reviews);
  app.use('/api/likes', likes);
  app.use('/api/shops', shops);

  //yelp API
  app.use('/api/yelp', yelpAPI);
};