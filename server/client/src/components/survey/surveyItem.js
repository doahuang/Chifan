import React from 'react';

const SurveyItem = ({ survey, removeSurvey }) => {
  const { _id, title, recipients, subject, body } = survey;
  const emails = recipients.map(el => el.email).join(', ');

  return (
    <li>
      <div>
        <p>Title: { title }</p>
        <p>Recipients: { emails }</p>
        <p>Subject: { subject }</p>
        <p>Body: { body }</p>
      </div>
      <div className='buttons'>
        <button onClick={() => {}}>
          Edit
        </button>
        <button onClick={() => removeSurvey(_id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default SurveyItem;