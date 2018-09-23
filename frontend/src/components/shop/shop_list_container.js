import { connect } from 'react-redux';

import ShopList from './shop_list';
import { allShops } from '../../actions/shop_actions';

const msp = ({ shops }, ownProps) => {
  const { search } = ownProps.location;
  const liked = search.match(/liked/);

  return {
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