import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTopics } from '../actions';

import alligator_background from '../resources/images/alligator_background.png';

class Topics extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  renderContent() {
    return this.props.topics.map(topic => {
      const linkTo = '/api/topics/' + topic.key + '?api-key=frontend_application';

      return (
        <Link
          to={linkTo}
          key={topic.key}
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{topic.title}</h5>
            <small>{new Date(topic.datePosted).toLocaleDateString('en-US')}</small>
          </div>
          <p className="mb-1">{topic.body}</p>
          <small>by {topic.author}</small>
        </Link>
      );
    });
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
          <div className="text-center">
            <div className="row">
              <h1
                className="display-5 fw-bold py-4 text-white shadow-lg"
                style={{ backgroundColor: '#407db4' }}
              >
                Topics
              </h1>
            </div>
            <div className="row my-5">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="list-group">{this.renderContent()}</div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col">
                <Link class="btn btn-primary" to="#" role="button">
                  Create New Topic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps({ topics }) {
  return { topics };
}

export default connect(mapStateToProps, { fetchTopics })(Topics);
