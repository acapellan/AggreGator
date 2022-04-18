import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchTopic } from '../actions';

class TopicDisplay extends Component {
  componentDidMount() {
    const id = window.location.pathname.replace('/topics/', '');
    this.props.fetchTopic(id);
  }

  renderContent() {
    return <div>{JSON.stringify(this.props)}</div>;
  }

  render() {
    return (
      <>
        <div>{this.renderContent()}</div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { topic: state.topic };
}

export default connect(mapStateToProps, { fetchTopic })(TopicDisplay);
