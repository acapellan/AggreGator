import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTopic } from '../actions';

class TopicDisplay extends Component {
  componentDidMount() {
    this.props.fetchTopic('625b067aed933cddca3fe459'); // TODO remove hardcoded param
  }

  render() {
    return (
      <>
        <div>props: {this.props.topic}</div>
      </>
    );
  }
}

function mapStateToProps({ topic }) {
  return { topic };
}

export default connect(mapStateToProps, { fetchTopic })(TopicDisplay);
