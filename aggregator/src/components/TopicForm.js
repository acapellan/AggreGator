import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import alligator_background from '../resources/images/alligator_background.png';

class TopicForm extends Component {
  renderFields() {
    return _
  }

  render() {
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
            <div
              className="row justify-content-md-center"
              onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
            >
              <div className="col-6 mx-5">
                <form className="my-5">
                  <div className="mb-3">
                    <label htmlFor="topicTitle" className="form-label">
                      Title
                    </label>
                    <input type="email" className="form-control" id="topicTitle" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="topicBody" className="form-label">
                      Body
                    </label>
                    <textarea className="form-control" id="topicBody" rows="5" />
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

export default TopicForm;
