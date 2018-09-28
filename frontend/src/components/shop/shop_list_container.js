import { connect } from 'react-redux';

import ShopList from './shop_list';
import { clearErrors } from '../../actions/ui_error';

const msp = ({ entities, session, filters }) => {
  const { shops, likes } = entities;

  return {
    shops,
    likes,
    user: !!session,
    filters
  }
};

const mdp = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(ShopList);