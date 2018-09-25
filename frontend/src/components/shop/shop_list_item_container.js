import { connect } from 'react-redux';

import ShopListItem from './shop_list_item';
import { addLike, deleteLike } from '../../actions/like_actions';

const mdp = dispatch => ({
  like: shopId => dispatch(addLike(shopId)),
  unlike: shopId => dispatch(deleteLike(shopId))
});

export default connect(null, mdp)(ShopListItem);