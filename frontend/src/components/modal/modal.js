import React from 'react'
import Login from '../session/login_form_container';
import Signup from '../session/signup_form_container';
import CreateReview from '../review/review_form/create_review_form_container';
import EditReview from '../review/review_form/edit_review_form_container';

export default ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'login':
      component = <Login />
      break;
    case 'signup':
      component = <Signup />
      break;
    case 'createReview':
      component = <CreateReview />
      break;
    case 'editReview':
      component = <EditReview />
      break;
    default:
      return null;
  }

  return (
    <div className='modal-bg' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}
