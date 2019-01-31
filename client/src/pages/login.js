import React, { Component } from "react";
import NavLandingPage from "../components/LandingNav/NavLandingPage";
import LoginBody from "../components/LoginBody/LoginBody";
import Footer from "../components/Footer/Footer";

class Register extends Component {
  render() {
    return (
      <div>
        <NavLandingPage />
        <LoginBody />
        <Footer />
      </div>
    );
  }
}

export default Register;
