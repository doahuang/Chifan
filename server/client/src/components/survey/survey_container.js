import { connect } from 'react-redux';
import { submitSurvey } from '../../actions/surveyAction';
import Survey from './Survey';

const msp = null;

const mdp = dispatch => ({ 
  submitSurvey: values => dispatch(submitSurvey(values))
});

export default connect(msp, mdp)(Survey);