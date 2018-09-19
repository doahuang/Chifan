import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import Modal from './modal';

const msp = ({ modal }) => {
  return {
    modal
  };
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(msp, mdp)(Modal);