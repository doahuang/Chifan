import { FETCH_USER } from '../actions/userAction';

const userReducer = (state = null, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case FETCH_USER:
      return action.user || null;
    default:
      return state;
  }
};

export default userReducer;