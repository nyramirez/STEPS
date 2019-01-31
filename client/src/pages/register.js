import React, { Component } from "react";
import NavLandingPage from "../components/LandingNav/NavLandingPage";
import RegBody from "../components/RegistrationBody/RegBody";
import Footer from "../components/Footer/Footer";

class Register extends Component {
  render() {
    return (
      <div>
        <NavLandingPage />
        <RegBody />
        <Footer />
      </div>
    );
  }
}

export default Register;
