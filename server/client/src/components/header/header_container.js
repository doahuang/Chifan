import { connect } from 'react-redux';
import Header from './Header';

import { fetchUser } from '../../actions/userAction';

const msp = ({ user }) => ({
  user
});

const mdp = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(msp, mdp)(Header);