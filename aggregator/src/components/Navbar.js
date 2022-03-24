import React, { Component } from 'react';
import { connect } from 'react-redux';
import user_icon from '../resources/images/user_icon_white.png';
import search_icon from '../resources/images/search_icon_white.png';

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <a className="nav-link" href="#" style={{color:"black"}}>
            * * *
          </a>
        );
      case false:
        return (
          <a className="nav-link" href="/auth/google" style={{color:"black"}}>
            Login
          </a>
        );
      default:
        return (
          <a className="nav-link" href="/auth/logout" style={{color:"black"}}>
            Logout
          </a>
        );
    }
  }


  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand ms-3 me-2" href="/">Aggregator</a>
          <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle the Navigation">
            <span className="navbar-toggler-icon">
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mx-2 mx-lg-0 container-fluid">
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
              <ul className="navbar-nav mx-lg-3 ms-lg-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={search_icon} width="25" height="25"/>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink" style={{width:"300px"}}>
                  <form className="d-flex mx-2">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-info" type="submit">Search</button>
                    </form>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={user_icon} width="30" height="30"/>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink" style={{width:"50px", color:"black"}}>
                    <a className="dropdown-item" href="/user-profile">User Profile</a>
                    <a className="dropdown-item" href="#">{this.renderContent()}</a>
                  </div>
                </li>
              </ul>
              
            </ul>
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
