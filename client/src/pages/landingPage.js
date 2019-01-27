import React, { Component } from "react";
import NavLandingPage from "../components/LandingNav/NavLandingPage";
import LandingBody from "../components/LandingBody/LandingBody"

class LandingPage extends Component {

    render() {
      return (<div>
    <NavLandingPage/>
    <LandingBody/>
      </div>
      );
    }
  }
  
  export default LandingPage;