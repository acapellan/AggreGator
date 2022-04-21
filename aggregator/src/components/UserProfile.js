import React from 'react';
import alligator_background from '../resources/images/alligator_background.png';
import aggregatorLogo from '../resources/images/logo_square.png';

const UserProfile = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundImage:`url(${alligator_background})`, backgroundSize:"cover", backgroundRepeat:"repeat"}}>
        <div className="px-4 py-5 text-center">
          <img
            className="d-block mx-auto mb-4 rounded shadow-lg"
            src={aggregatorLogo}
            alt=""
            width="192"
            height="192"
          />
          <h1 className="display-5 fw-bold">User Profiles</h1>
        </div>
      </div>
    </>
  );
};

export default UserProfile;