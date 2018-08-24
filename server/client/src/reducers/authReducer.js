import { FETCH_USER } from '../actions/userAction';

const authReducer = (state = null, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case FETCH_USER:
      return action.user || false;
    default:
      return state;
  }
};

export default authReducer;