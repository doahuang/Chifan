import { connect } from 'react-redux';
import Header from './header';

import { fetchUser } from '../../actions/userAction';

const msp = ({ auth }) => ({
  currentUser: auth
});

const mdp = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(msp, mdp)(Header);