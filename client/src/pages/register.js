import React, { Component } from "react";
import RegNav from "../components/RegistrationNav/regNav";
import RegBody from "../components/RegistrationBody/RegBody";


class Register extends Component {

    render() {
      return (<div>
    <RegNav/>
    <RegBody/>
      </div>
      );
    }
  }
  
  export default Register;
