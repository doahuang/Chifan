import { connect } from 'react-redux'

import Profile from './profile';
import { openModal } from '../../actions/modal';

const mdp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(null, mdp)(Profile);