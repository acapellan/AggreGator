import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'still deciding';
      case false:
        return 'logged out';
      default:
        return 'logged in';
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container">
            <a className="navbar-brand" href="/">
              AggreGator
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/topics">
                    Topics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/topics/new">
                    New Topic
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/user-profile">
                    User Profile
                  </a>
                </li>
                {this.renderContent()}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
