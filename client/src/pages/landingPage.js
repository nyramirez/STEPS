import React, { Component } from "react";
import NavLandingPage from "../components/LandingNav/NavLandingPage";
import LandingBody from "../components/LandingBody/LandingBody"
import Footer from "../components/Footer/Footer"
class LandingPage extends Component {

    render() {
      return (<div>
    <NavLandingPage/>
    <LandingBody/>
    <Footer/>
      </div>
      );
    }
  }
  
  export default LandingPage;