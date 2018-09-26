import { connect } from 'react-redux';

import ShopList from './shop_list';
import { allShops } from '../../actions/shop_actions';
import { getLikes } from '../../actions/like_actions';

const msp = ({ session, entities }, { location }) => {
  const { shops, likes } = entities;
  const liked = location.search.match(/liked/);

  return {
    shops,
    likes,
    loggedin: !!session,
    liked: !!liked
  }
}

const mdp = dispatch => {
  return {
    allShops: () => dispatch(allShops()),
    getLikes: params => dispatch(getLikes(params))
  }
}

export default connect(msp, mdp)(ShopList);