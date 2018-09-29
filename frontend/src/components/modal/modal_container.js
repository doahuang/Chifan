import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import Modal from './modal';

const msp = ({ ui: { modal }}) => ({
  modal
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Modal);