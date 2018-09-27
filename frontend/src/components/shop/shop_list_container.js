import { connect } from 'react-redux';

import ShopList from './shop_list';

import callYelp from '../../actions/yelp_actions';
import { getLikes } from '../../actions/like_actions';
import { clearErrors } from '../../actions/ui_error';

const msp = ({ session, entities }, ownProps) => {
  const { shops, likes } = entities;
  const { search } = ownProps.location;

  return {
    user: !!session,
    shops,
    likes,
    search
  }
}

const mdp = dispatch => ({
  callYelp: params => dispatch(callYelp(params)), 
  getLikes: params => dispatch(getLikes(params)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(ShopList);