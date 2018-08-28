import React from 'react';

export default class SurveyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '', recipients: '', subject: '', body: ''
    };

    this.submit = this.submit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    this.props.receiveSurvey(this.state);
    this.props.closeModal();
  }

  render() {
    const { title, recipients, subject, body } = this.state;

    return (
      <div className='survey'>
        <h2>New Survey</h2>
        <form onSubmit={this.submit}>
          <label>
            Title: <input onChange={this.update('title')} 
              value={title} required/>
          </label>
          <label>
            Recipients: <input onChange={this.update('recipients')}
              value={recipients} required/>
          </label>
          <label>
            Subject: <input onChange={this.update('subject')}
              value={subject} required/>
          </label>
          <textarea onChange={this.update('body')} 
            value={body} placeholder='write something' required>
          </textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}