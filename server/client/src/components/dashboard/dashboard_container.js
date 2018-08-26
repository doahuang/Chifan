import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { fetchSurveys } from '../../actions/surveyAction';

const msp = ({ surveys }) => ({
  surveys
});

const mdp = dispatch => ({
  fetchSurveys: () => dispatch(fetchSurveys())
});

export default connect(msp, mdp)(Dashboard);