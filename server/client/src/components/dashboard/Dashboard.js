import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/survey'><b>+ New Survey</b></Link>
        <ul>{ surveyList }</ul>
      </div>
    );
  }
}