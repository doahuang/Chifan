import { connect } from 'react-redux';

import ShopListItem from './shop_list_item';
import { addLike, deleteLike } from '../../actions/like_actions';

const mdp = dispatch => ({
  like: (shopId, next) => dispatch(addLike(shopId, next)),
  unlike: (shopId, next) => dispatch(deleteLike(shopId, next))
});

export default connect(null, mdp)(ShopListItem);