import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../Common/TextFieldGroup";

import img1 from "../../images/class-classroom-conference-desk-education-exhibit-1560887-pxhere.com.jpg";
import img2 from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import img3 from "../../images/work-sign-training-business-street-sign-yellow-1074283-pxhere.com.jpg";
import img4 from "../../images/macbook-working-people-technology-meeting-office-910844-pxhere.com.jpg";
import img5 from "../../images/writing-book-read-person-people-white-1105803-pxhere.com.jpg";
import img6 from "../../images/writing-book-read-white-heart-gift-399096-pxhere.com.jpg";
// import img7 from "../../images/african-american-african-descent-afro-american-analyzing-black-1451425-pxhere.com.jpg";
// import img8 from "../../images/work-traffic-sign-training-business-street-sign-1230777-pxhere.com.jpg";
// import img9 from "../../images/kid-swimming.jpg";
// import img10 from "../../images/man-people-white-young-student-smiling-867306-pxhere.com.jpg";

import "./style.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 m-auto">
              <img src={img1} alt="classroom conference" className="images" />
            </div>
            <div className="col-lg-3 m-auto">
              <img src={img2} alt="kids in computer" className="images" />
            </div>
            <div className="col-lg-3 m-auto">
              <img
                src={img3}
                alt="a lerning traffic signal"
                className="images"
              />
            </div>
            <div className="col-lg-3 m-auto">
              <img
                src={img4}
                alt="young adults at the computer"
                className="images"
              />
            </div>
          </div>
          <div className="row formSpacer" />
          <div className="row mt-3 mb-3">
            <div className="col-lg-3 m-auto">
              <img src={img5} alt="kid reading a book" className="images" />
            </div>
            <div className="loginContainer col-md-5">
              <p className="lead text-center">Log in to your STEPS account</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input
                  type="submit"
                  className="btn btn-info btn-block mt-4 mb-4"
                />
              </form>
            </div>
            <div className="col-lg-3 m-auto">
              <img src={img6} alt="boom with a heart" className="images" />
            </div>
          </div>
         {/* <div className="row formSpacer" />
          <div className="row ">
            <div className="col-lg-3 m-auto">
              <img src={img7} alt="conference" className="images" />
            </div>
            <div className="col-lg-3 m-auto">
              <img src={img8} alt="new skill traffic sign" className="images" />
            </div>
            <div className="col-lg-3 m-auto">
              <img src={img9} alt="kid swiming" className="images" />
            </div>
            <div className="col-lg-3 m-auto">
              <img
                src={img10}
                alt="young adult graduating"
                className="images"
              />
            </div>
          </div> */}
        </div> 
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
