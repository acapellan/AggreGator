import React, {Component} from 'react';
import { connect } from 'react-redux';

import alligator_background from '../resources/images/alligator_background.png';
import aggregatorLogo from '../resources/images/logo_square.png';
import googleLogo from '../resources/images/googleLogo.png';

class UserProfile extends Component {
  renderContent() {
    const user = this.props.auth;

    switch (this.props.auth) {
      case null:
        <p className="text-white">Loading...</p>;
      case false:
        return (
          <div className="col">
            <h2 className="text-white my-2">Please Sign in to view your User Profile</h2>
            <a
            type="button"
            className="btn btn-light btn-lg shadow-lg px-4 my-4"
            href="/auth/google"
            style={{ width: 255 }}
          >
            <img src={googleLogo} width="25" height="25" /> Sign in with Google
          </a>
          </div>
          
        );
      default:
        return (
          <div className='col-12'>
            <h2 className="text-white my-3">Hello, {user.name.first}!</h2>
            <a type ="button" className="btn btn-info btn-lg shadow-lg px-4 my-3" href="/auth/logout">Logout</a>
            </div>
          
        );
    }
  }

  render() {
      return (
      <>
        <div className="container-fluid" style={{backgroundImage:`url(${alligator_background})`, backgroundSize:"cover", backgroundRepeat:"repeat"}}>
          <div className="text-center">
          <div className="row">
                    <h1 className="display-5 fw-bold py-4 text-white shadow-lg" style={{backgroundColor:"#407db4"}}>User Profile</h1>
          </div>

          <div className="row justify-content-center">
          
            <div className="col-lg-3 bg-primary rounded-3 shadow-lg mt-5 mb-5 py-4">
            <div className="col-12">{this.renderContent()}</div>
            </div>

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


export default connect(mapStateToProps)(UserProfile);
