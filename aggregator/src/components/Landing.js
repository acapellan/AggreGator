import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="px-4 py-5 my-5 text-left">
          <img
            className="d-block mx-auto mb-4"
            src="logo_square.png"
            alt=""
            width="192"
            height="192"
          />
          <h1 className="display-5 fw-bold">Welcome to AggreGator!</h1>
          <div className="col-lg-12 mx-auto">
            <p className="lead mb-4">
              AggreGator is a service to the University of Florida community to help perspective
              students, current students, alumni, and faculty find success in the classroom and
              beyond.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a type="button" className="btn btn-primary btn-lg px-4" href="/auth/google">
                Sign in with Google
              </a>
              <a type="button" className="btn btn-light btn-lg px-4" href="/auth/logout">
                Logout
              </a>
              <a type="button" className="btn btn-info btn-lg px-4" href="/auth/current_user">
                Current User
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
