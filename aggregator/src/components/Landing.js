import React, { Component } from 'react';
import { connect } from 'react-redux';

import aggregatorLogo from '../resources/images/logo_square.png';
import googleLogo from '../resources/images/googleLogo.png';
import treeBackground from '../resources/images/background.png';

class HomePage extends Component {
  renderContent() {
    const user = this.props.auth;

    switch (this.props.auth) {
      case null:
        <p className="text-white">Loading...</p>;
      case false:
        return (
          <a
            type="button"
            className="btn btn-light btn-lg shadow-lg px-4"
            href="/auth/google"
            style={{ width: 255 }}
          >
            <img src={googleLogo} width="25" height="25" /> Sign in with Google
          </a>
        );
      default:
        return <h2 className="text-white my-3">Hello, {user.name.first}!</h2>;
    }
  }

  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{
            backgroundImage: `url(${treeBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat'
          }}
        >
          <div className="px-4 py-5 text-center">
            <img
              className="d-block mx-auto mb-4 rounded"
              src={aggregatorLogo}
              alt="Aggregator Logo"
              width="192"
              height="192"
            />
            <p className="display-3 fw-bold text-white py-3">Welcome to AggreGator!</p>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <p className="py-3 fs-4 text-white">
                  AggreGator is a service to the University of Florida community to help perspective
                  students, current students, alumni, and faculty find success in the classroom and
                  beyond.
                </p>
              </div>
              <div className="col-2"></div>
              <div className="col-12">{this.renderContent()}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(HomePage);
