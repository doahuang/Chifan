import { connect } from 'react-redux'

import Profile from './profile';

const msp = ({ session }) => ({
  id: session.id
});

export default connect(msp)(Profile);