import React, { Component } from "react";
import NavLandingPage from "../components/LandingNav/NavLandingPage";
import ContactBody from "../components/contactBody/contactBody";

class ContactUs extends Component {
    render() {
      return (
        <div>
          <NavLandingPage />
          <ContactBody/>
         </div>
      );
    }
  }
  
  export default ContactUs;
  