import { connect } from 'react-redux';

import ShopList from './shop_list';

const msp = ({ entities, session, ui: { filters }}) => {
  const { shops, likes } = entities;

  return {
    shops,
    likes,
    user: !!session,
    filters
  }
};

export default connect(msp)(ShopList);