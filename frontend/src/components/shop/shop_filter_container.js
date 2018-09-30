import { connect } from 'react-redux';

import ShopFilter from './shop_filter';
import { receiveFilter, removeFilters } from '../../actions/filter_actions';

// const msp = ({ ui: { filters }}) => ({
//   filters
// });

const mdp = dispatch => ({
  set: filter => dispatch(receiveFilter(filter)),
  reset: () => dispatch(removeFilters())
});

export default connect(null, mdp)(ShopFilter);
