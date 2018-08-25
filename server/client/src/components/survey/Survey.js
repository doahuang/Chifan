import React from 'react';
import { withRouter } from 'react-router-dom';

class Survey extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initState = {
      title: '', recipients: '', subject: '', body: ''
    };

    this.clear = this.clear.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  submit(e) {
    e.preventDefault();
    this.props.submitSurvey(this.state);
    this.props.history.push('/dashboard');
  }

  clear(e) {
    e.preventDefault();
    this.setState(this.initState);
  }

  render() {
    const { title, recipients, subject, body } = this.state;

    return (
      <div>
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
          <div>
            <button>Submit</button>
            <button onClick={this.clear}>Clear</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Survey);