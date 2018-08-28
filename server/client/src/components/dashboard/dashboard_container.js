import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { 
  fetchSurveys,
  removeSurvey
} from '../../actions/surveyAction';
import { openModal } from '../../actions/modalAction';

const msp = ({ surveys }) => ({
  surveys
});

const mdp = dispatch => ({
  fetchSurveys: () => dispatch(fetchSurveys()),
  removeSurvey: id => dispatch(removeSurvey(id)), 
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Dashboard);