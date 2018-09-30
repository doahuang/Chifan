import { connect } from 'react-redux';

import ShopList from './shop_list';

const msp = ({ entities: { shops, likes }, session, ui: { filters }}) => {
  return {
    shops,
    likes,
    user: !!session,
    filters
  }
};

export default connect(msp)(ShopList);