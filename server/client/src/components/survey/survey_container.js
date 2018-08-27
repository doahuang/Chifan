import { connect } from 'react-redux';
import { receiveSurvey } from '../../actions/surveyAction';
import Survey from './Survey';

const msp = null;

const mdp = dispatch => ({ 
  receiveSurvey: values => dispatch(receiveSurvey(values))
});

export default connect(msp, mdp)(Survey);