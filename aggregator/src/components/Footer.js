import React from 'react';
import github_icon from '../resources/images/github_icon.png';

const Footer = () => {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-primary">
        <div className="container text-center">
          <div className="">
            <a className="btn " href="https://github.com/acapellan/AggreGator" role="button">
              <img src={github_icon} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
