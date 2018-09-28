import { connect } from 'react-redux';

import ShopPage from './shop_page';

import { callYelp } from '../../actions/yelp_actions';
import { getLikes } from '../../actions/like_actions';

const msp = ({ session }, ownProps) => {
  const { search } = ownProps.location;

  return {
    user: !!session,
    search
  }
}

const mdp = dispatch => ({
  callYelp: params => dispatch(callYelp(params)), 
  getLikes: params => dispatch(getLikes(params))
});

export default connect(msp, mdp)(ShopPage);