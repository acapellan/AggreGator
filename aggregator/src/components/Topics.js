import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTopics } from '../actions';
import { approxTime } from '../helpers/approxTime';
import alligator_background from '../resources/images/alligator_background.png';

class Topics extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  renderContent() {
    return this.props.topics.map(topic => {
      const linkTo = '/topics/' + topic._id;
      let body = topic.body;

      // shorten the body of the topic if it exceeds maxLength
      const maxLength = 120;
      if (topic.body.length > maxLength) {
        body = topic.body.slice(0, maxLength) + '...';
      }

      return (
        <Link
          to={linkTo}
          key={topic._id}
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{topic.title}</h5>
            <small>posted {approxTime(topic.datePosted)}</small>
          </div>
          <p className="mb-1">{body}</p>
          <small>
            by {topic.author.nomen.first} {topic.author.nomen.last}
          </small>
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
            <div className="row pb-5">
              <div className="col">
                <Link className="btn btn-primary" to="/topics/new" role="button">
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

function mapStateToProps(state) {
  return { topics: state.topics };
}

export default connect(mapStateToProps, { fetchTopics })(Topics);
