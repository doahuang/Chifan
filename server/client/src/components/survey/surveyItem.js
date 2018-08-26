import React from 'react';

const SurveyItem = ({ survey }) => {
  const { title, recipients, subject, body } = survey;
  const emails = recipients.map(el => el.email).join(', ');

  return (
    <li className='surveyItem'>
      <p>Title: { title }</p>
      <p>Recipients: { emails }</p>
      <p>Subject: { subject }</p>
      <p>Body: { body }</p>
    </li>
  );
};

export default SurveyItem;