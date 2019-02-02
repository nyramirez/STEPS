import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

import logo from "../../images/Logo.png";
import "./style.css";

class LandingPageNav extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="guestLink mx-auto ">
        <div className="row mx-auto ">
          <div className="profBtn col-lg-4 col-sm-12 mx-auto border border-primary">
            <Link className="createProfileText mx-auto " to="/create-profile">
              Create Profile
            </Link>
          </div>
          <div className="col-lg-4 col-sm-12 m-auto">
            <img
              className="rounded-circle m-auto userPic"
              src={user.avatar}
              alt={user.name}
              title="Upload an image in dashboard"
            />
          </div>
          <div className="col-lg-4 col-sm-12 m-auto ">
            <a
              className= "logoutText"
              href="/"
              onClick={this.onLogoutClick.bind(this)}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    );

    const guestLinks = (

      <div className="guestLink mx-auto ">
        <div className="row mx-auto ">
          <Link className="registerText mx-auto "
            color="inherit"
            to="/register"
          >
            Register
        </Link>
          <Link className="loginText mx-auto " to="/login">
            Login
        </Link>
        </div>
      </div>
    );

    return (
      <div className="landingNav card-panel">
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <Link to="/">
              <img src={logo} alt="steps logo" className="logo" />
            </Link>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="body">
              <div className="main">
                <div className="row">
                  <div className="col-md offset-md">
                    <Link to="/">
                      <h1 className="mainHeading">STEPS</h1>
                    </Link>
                    <h1 className="subHeading">A step towards new learning~</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="row linkContainer">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingPageNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(LandingPageNav);
