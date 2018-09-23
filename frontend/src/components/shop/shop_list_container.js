import { connect } from 'react-redux';

import ShopList from './shop_list';
import { allShops } from '../../actions/shop_actions';

const msp = ({ session, shops}, ownProps) => {
  const user = session ? session.id : null;
  const liked = ownProps.location.search.match(/liked/);

  return {
    user,
    shops,
    liked: !!liked
  }
}

const mdp = dispatch => {
  return {
    allShops: liked => dispatch(allShops(liked))
  }
}

export default connect(msp, mdp)(ShopList);