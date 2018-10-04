import { connect } from 'react-redux';

import Filter from './filter';
import { receiveFilter, removeFilters } from '../../actions/filter_actions';

const mdp = dispatch => ({
  set: filter => dispatch(receiveFilter(filter)),
  reset: () => dispatch(removeFilters())
});

export default connect(null, mdp)(Filter);
