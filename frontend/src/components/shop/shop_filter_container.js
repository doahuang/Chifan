import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ShopFilter from './shop_filter';
import { 
  receiveFilter,
  removeFilters
} from '../../actions/filter_actions';

const msp = ({ ui: { filters }}, ownProps) => ({
  filters,
  ownProps
});

const mdp = dispatch => ({
  set: filter => dispatch(receiveFilter(filter)),
  reset: () => dispatch(removeFilters())
});

export default withRouter(connect(msp, mdp)(ShopFilter));
