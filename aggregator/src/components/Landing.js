import React from 'react';
import googleLogo from '../resources/images/googleLogo.png';
import treeBackground from '../resources/images/background.png';

const HomePage = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundImage:`url(${treeBackground})`, backgroundSize:"cover", backgroundRepeat:"repeat"}}>
        <div className="px-4 py-5 text-center">
          <img
            className="d-block mx-auto mb-4 rounded"
            src="logo_square.png"
            alt="Aggregator Logo"
            width="192"
            height="192"
          />
          <h1 className="display-5 fw-bold text-white">Welcome to AggreGator!</h1>
          <div className="col-lg-12">
            <p className="lead mb-4 text-white">
              AggreGator is a service to the University of Florida community to help perspective students, current students, alumni, and faculty find success in the classroom and beyond.
            </p>
            
          <div className="container">
            <div className="row my-2">
              <div className="col">
                  <a type="button" className="btn btn-primary btn-lg px-4 text-nowrap mx-2" href="/auth/current_user"style={{width: 165}}>Current User</a>
                  <a type="button" className="btn btn-primary btn-lg px-4 text-nowrap mx-2" href="/Signup" style={{width: 165}}>Sign Up</a>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <a type="button" className="btn btn-light btn-lg px-4" href="/auth/google" style={{width: 255}}><img src={googleLogo} width="25" height="25" /> Sign in with Google</a>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <a type="button" className="btn btn-info btn-lg px-4" href="/auth/logout" style={{width: 165}}>Logout</a>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
