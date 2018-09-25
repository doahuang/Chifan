import { connect } from 'react-redux';

import ShopList from './shop_list';
import { allShops } from '../../actions/shop_actions';
import { myLikes } from '../../actions/like_actions';

const msp = ({ session, entities }, ownProps) => {
  const { shops, likes } = entities;
  const liked = ownProps.location.search.match(/liked/);

  return {
    shops,
    likes,
    loggedin: !!session,
    liked: !!liked,
  }
}

const mdp = dispatch => {
  return {
    allShops: () => dispatch(allShops()),
    myLikes: () => dispatch(myLikes())
  }
}

export default connect(msp, mdp)(ShopList);