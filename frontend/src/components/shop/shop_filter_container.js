import { connect } from 'react-redux';

import ShopFilter from './shop_filter';
import { 
  receiveFilter,
  removeFilters
} from '../../actions/filter_actions';

const msp = ({ filters }) => ({
  filters
});

const mdp = dispatch => ({
  toggle: filter => dispatch(receiveFilter(filter)),
  reset: () => dispatch(removeFilters())
});

export default connect(msp, mdp)(ShopFilter);
