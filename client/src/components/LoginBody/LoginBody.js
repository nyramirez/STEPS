import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import img1 from "../../images/class-classroom-conference-desk-education-exhibit-1560887-pxhere.com.jpg";
import img2 from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import img3 from "../../images/work-sign-training-business-street-sign-yellow-1074283-pxhere.com.jpg";
import img4 from "../../images/macbook-working-people-technology-meeting-office-910844-pxhere.com.jpg";
import img5 from "../../images/writing-book-read-person-people-white-1105803-pxhere.com.jpg";
import img6 from "../../images/writing-book-read-white-heart-gift-399096-pxhere.com.jpg";
import img7 from "../../images/african-american-african-descent-afro-american-analyzing-black-1451425-pxhere.com.jpg";
import img8 from "../../images/work-traffic-sign-training-business-street-sign-1230777-pxhere.com.jpg";
import img9 from "../../images/kid-swimming.jpg";
import img10 from "../../images/man-people-white-young-student-smiling-867306-pxhere.com.jpg";
import "./style.css"

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

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }

  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

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
      <div className="loginContainer m-auto">
        <div className="row">
          <div className="col-lg-3 m-auto">
            <img src={img1} alt="classroom conference" className="images"/>
          </div>
          <div className="col-lg-3 m-auto">
            <img src={img2} alt="kids in computer" className="images"/>
          </div>
          <div className="col-lg-3 m-auto">
            <img src={img3} alt="a lerning traffic signal" className="images"/>
          </div>
          <div className="col-lg-3 m-auto">
            <img src={img4} alt="young adults at the computer" className="images"/>
          </div>
        </div>
        <div className="row formSpacer">
        </div>
        <div className="row">
          <div className="col-lg-3 m-auto">
            <img src={img5} alt="kid reading a book" className="images"/>
          </div>
          <div className="col-lg-6 m-auto inputBlock">
            <h1 className="display-4 text-center loginTitle m-4">
              Log into your STEPS account
              </h1>
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
              <input type="submit" className="btn btn-info btn-block btn-lg mt-4" />
            </form>
          </div>
          <div className="col-lg-3 m-auto">
            <img src={img6} alt="boom with a heart" className="images"/>
          </div>
        </div>
        <div className="row formSpacer">
        </div>
        <div className="row ">
          <div className="col-lg-3 m-auto">
            <img src={img7} alt="conference" className="images"/>
          </div>
          <div className="col-lg-3 m-auto">
            <img src={img8} alt="new skill traffic sign" className="images"/>
          </div>
          <div className="col-lg-3 m-auto">
            <img src={img9} alt="kid swiming" className="images"/>
          </div>
          <div className="col-lg-3 m-auto">
            <img src={img10} alt="young adult graduating" className="images"/>
          </div>
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
