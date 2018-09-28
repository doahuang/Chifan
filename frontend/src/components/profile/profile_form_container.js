import { connect } from 'react-redux';

import ProfileForm from './profile_form';
import { updateUser } from '../../actions/user_actions';

const mdp = dispatch => ({
  update: (user, next) => dispatch(updateUser(user, next)) 
});

export default connect(null, mdp)(ProfileForm);