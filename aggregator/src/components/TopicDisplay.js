import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTopic } from '../actions';
import { approxTime } from '../helpers/approxTime';

class TopicDisplay extends Component {
  componentDidMount() {
    const id = window.location.pathname.replace('/topics/', '');
    this.props.fetchTopic(id);
  }

  renderContent() {
    const topic = this.props.topic;
    return (
      <div className="col-lg-6 col-md-8 col-sm-10 my-3">
        <h1>{topic.title}</h1>
        <p className="fs-5 text-muted">
          posted by {topic.author ? topic.author.nomen.first : null}{' '}
          {topic.author ? topic.author.nomen.last : null} {approxTime(topic.datePosted)}
        </p>
        <p>{topic.body}</p>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="row justify-content-center">{this.renderContent()}</div>
        <div className="row justify-content-end">
          <div className="col-lg-6 col-md-8 col-sm-10 my-3">
            <Link className="btn btn-secondary mx-2" to="/topics" role="button">
              Back to Topics
            </Link>
            <button className="btn btn-info mx-2">Edit</button>
            <button className="btn btn-danger mx-2">Delete</button>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { topic: state.topic };
}

export default connect(mapStateToProps, { fetchTopic })(TopicDisplay);
