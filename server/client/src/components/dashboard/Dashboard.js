import React from 'react';
import SurveyItem from '../survey/surveyItem';

export default class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  
  render() {
    const surveyList = this.props.surveys.map((el, i) => 
      <SurveyItem key={i} survey={el} 
        removeSurvey={this.props.removeSurvey} />
    );
  
    return (
      <div className='dashboard'>
        <h2>Dashboard</h2>
        <ul>{ surveyList }</ul>
        <div className='add'>
          <span onClick={() => this.props.openModal('survey')}>
            +
          </span>
        </div>
      </div>
    );
  }
}