import { connect } from 'react-redux';

import ShopList from './shop_list';
import { allShops } from '../../actions/shop_actions';
import { myLikes } from '../../actions/like_actions';

const msp = ({ session, entities }, ownProps) => {
  const user = session ? session.id : null;
  const { shops, likes } = entities;
  const liked = ownProps.location.search.match(/liked/);

  return {
    user,
    shops,
    likes,
    liked: !!liked
  }
}

const mdp = dispatch => {
  return {
    allShops: liked => dispatch(allShops(liked)),
    myLikes: () => dispatch(myLikes())
  }
}

export default connect(msp, mdp)(ShopList);