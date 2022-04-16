import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import alligator_background from '../resources/images/alligator_background.png';

class TopicForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '', redirect: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ redirect: true });

    const data = {
      title: this.state.title,
      body: this.state.body
    };

    axios.post('/api/topics?api-key=frontend_application', data).catch(err => console.log(err));
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/topics" />;
    } else {
      return (
        <>
          <div
            className="container-fluid"
            style={{
              backgroundImage: `url(${alligator_background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'repeat'
            }}
          >
            <div>
              <div className="row">
                <div className="text-center shadow-lg" style={{ backgroundColor: '#407db4' }}>
                  <h1 className="display-5 fw-bold py-4 text-white">New Topics</h1>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-6 mx-5">
                  <form onSubmit={this.handleSubmit} className="my-5">
                    <div className="mb-3">
                      <label htmlFor="topicTitle" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        className="form-control"
                        id="title"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="topicBody" className="form-label">
                        Body
                      </label>
                      <textarea
                        value={this.state.body}
                        onChange={this.handleChange}
                        className="form-control"
                        id="body"
                        rows="5"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default TopicForm;
