import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modalAction';

const modalReducer = (state = null, action) => {
  Object.freeze(state);

  switch (aciton.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modelReducer;