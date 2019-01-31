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
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            All Post
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="Upload an image in dashboard"
          />{" "}
          Logout
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link registerText"
            color="inherit"
            to="/register"
          >
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link loginText" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div className="landingNav card-panel">
        <div className="row">
          <div className="col l3 s12">
            <Link to="/">
              <img src={logo} alt="steps logo" className="logo" />
            </Link>
          </div>
          <div className="col l5 s12">
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
          <div className="col l4 s12">
            <div className="row landingNavSpacer" />
            <div className="row">
              <div className="col l3 s12" />
              <div className="col l3 s12">
                {isAuthenticated ? authLinks : guestLinks}
                {/* <Link className="registerText" to="/register">
                  Register{" "}
                </Link>
              </div>
              <div className="col l3 s12">
                <Link className="loginText" to="/login" color="inherit">
                  Login
                </Link> */}
              </div>
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
