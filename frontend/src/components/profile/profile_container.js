import { connect } from 'react-redux'

import Profile from './profile';
import { clearErrors } from '../../actions/ui_error';

const msp = ({ session }) => ({
  id: session.id
});

const mdp = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(Profile);