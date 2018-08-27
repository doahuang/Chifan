import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { 
  fetchSurveys,
  removeSurvey
} from '../../actions/surveyAction';

const msp = ({ surveys }) => ({
  surveys
});

const mdp = dispatch => ({
  fetchSurveys: () => dispatch(fetchSurveys()),
  removeSurvey: id => dispatch(removeSurvey(id))
});

export default connect(msp, mdp)(Dashboard);