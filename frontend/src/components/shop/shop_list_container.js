import { connect } from 'react-redux';

import ShopList from './shop_list';
import { allShops } from '../../actions/shop_actions';

const msp = ({ shops }) => ({
  shops
});

const mdp = dispatch => {
  return {
    allShops: () => dispatch(allShops())
  }
}

export default connect(msp, mdp)(ShopList);