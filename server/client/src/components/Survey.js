import React from 'react';

const Survey = () => {
  return (
    <div>
      <h2>New Survey</h2>
      <form>
        <label>
          Title: <input type='text' required/>
        </label>
        <label>
          Recipients: <input type='email' required/>
        </label>
        <label>
          Subject: <input type='text' required/>
        </label>
        <textarea placeholder='write something' required></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Survey;