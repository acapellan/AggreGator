import React from 'react';
import alligator_background from '../resources/images/alligator_background.png';
import aggregatorLogo from '../resources/images/logo_square.png';

const UserProfile = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundImage:`url(${alligator_background})`, backgroundSize:"cover", backgroundRepeat:"repeat"}}>
        <div className="text-center">
          <div className="row">
            <h1 className="display-5 fw-bold mb-5 py-4 text-white shadow-lg" style={{backgroundColor:"#407db4"}}>User Profiles</h1>
          </div>
          <div className="row">
            <div className="col mb-5">
              <img
              className="d-block mx-auto rounded shadow-lg"
              src={aggregatorLogo}
              alt=""
              width="192"
              height="192"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;