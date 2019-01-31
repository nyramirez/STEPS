import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";

import KidswComputer from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import "./style.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      title: "",
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
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      title: this.state.title
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    const options = [
      { label: "Student", value: "Student" },
      { label: "Instructor", value: "Instructor" }
    ];

    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-6">
            <img src={KidswComputer} alt="slide" />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 text-center">Create your STEPS Account</h1>
            <p className="lead text-center" />
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                error={errors.name}
              />
              <TextFieldGroup
                placeholder="Email"
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
              <TextFieldGroup
                placeholder="Confirm Password"
                name="password2"
                type="password"
                value={this.state.password2}
                onChange={this.onChange}
                error={errors.password2}
              />
              <SelectListGroup
                placeholder="Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                options={options}
                error={errors.title}
                info="Are you a student or instructor?"
              />
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

// import React from "react";
// import PropTypes from "prop-types";
// import KidswComputer from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
// import "./style.css";

// function LandingBody() {
//   return (
//     <div className="regPage">
//       <div className="card-group">
//         <div className="cardImg">
//           <img className="card-img" src={KidswComputer} alt="slide" />
//         </div>
//         <div className="cardText">
//           <div className="card-body">
//             <form>
//               <h2>Please fill the next information :</h2>
//               <br />
//               <div className="form-group row">
//                 <label for="email" className="col-sm-3 col-form-label">
//                   Email
//                 </label>
//                 <div className="col-sm-9">
//                   <input
//                     type="email"
//                     className="form-control-lg"
//                     id="email"
//                     placeholder="Email"
//                   />
//                 </div>
//               </div>
//               <br />
//               <div className="form-group row">
//                 <label for="password" className="col-sm-3 col-form-label">
//                   Password
//                 </label>
//                 <div className="col-sm-9">
//                   <input
//                     type="password"
//                     className="form-control-lg"
//                     id="password"
//                     placeholder="Password"
//                   />
//                 </div>
//               </div>
//               <br />
//               <hr />
//               <br />
//               <h2>Confirm password:</h2>
//               <br />
//               <div className="form-group row">
//                 <label for="inputPassword3" className="col-sm-3 col-form-label">
//                   Password
//                 </label>
//                 <div className="col-sm-9">
//                   <input
//                     type="password"
//                     className="form-control-lg"
//                     id="passwordCheck"
//                     placeholder="Password"
//                   />
//                 </div>
//               </div>
//               <br />
//               <hr />
//               <br />
//               <h2>Please select an option:</h2>
//               <br />
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="studentOption"
//                   id="studentOption"
//                   value="student"
//                   checked
//                 />
//                 <label className="form-check-label" for="studentOption">
//                   I am student looking for a tutor
//                 </label>
//               </div>
//               <br />
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="studentOption"
//                   id="tutorOption"
//                   value="tutor"
//                   checked
//                 />
//                 <label className="form-check-label" for="studentOption">
//                   I am a tutor
//                 </label>
//               </div>
//               <br />
//               <hr />
//               <br />
//               <button
//                 type="submit"
//                 aria-pressed="false"
//                 class="btn btn-primary btn-lg btn-block active"
//                 value="Submit"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// LandingBody.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default LandingBody;
