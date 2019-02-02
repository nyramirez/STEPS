import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import KidswComputer from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import CoffeStudy from "../../images/macbook-working-people-technology-meeting-office-910844-pxhere.com.jpg";
import KidSwim from "../../images/kid-swimming.jpg";
import People from "../../images/class-classroom-conference-desk-education-exhibit-1560887-pxhere.com.jpg";
import "./landingStyle.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landPage">
        <div
          id="carousel-5"
          className="carousel slide"
          data-ride="carousel"
          data-interval="3000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-5"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carousel-5" data-slide-to="1" />
            <li data-target="#carousel-5" data-slide-to="2" />
            <li data-target="#carousel-5" data-slide-to="3" />
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item imageSpace active">
              <img className="card-img" src={KidswComputer} alt="slide" />
              <div className="card-img-overlay">
                <div className="card-header">
                  <h1 className="cardHeading title1"> Skills </h1>
                </div>
                <br />
                <p className="card-text text1">
                  It does not matter who you are or what you do.
                </p>
                <br />
                <br />
                <p className="card-text text1">
                  If you have skills, we would like you to teach us.
                </p>
              </div>
            </div>

            <div className="carousel-item imageSpace">
              <img className="card-img" src={CoffeStudy} alt="slide" />
              <div className="card-img-overlay">
                <div className="card-header">
                  <h1 className="cardHeading title1"> Teach </h1>
                </div>
                <br />
                <p className="card-text text1">
                  We promote your skills and talent
                </p>
                <br />
                <br />
                <p className="card-text text1">
                  Tell the world what can you teach.
                </p>
              </div>
            </div>

            <div className="carousel-item imageSpace">
              <img className="card-img" src={KidSwim} alt="slide" />
              <div className="card-img-overlay">
                <div className="card-header">
                  <h1 className="cardHeading title1"> Teach </h1>
                </div>
                <br />
                <p className="card-text text1">
                  Learn from people that is profesional by experience, education
                  and practice.
                </p>
                <br />
              </div>
            </div>

            <div className="carousel-item imageSpace">
              <img className="card-img" src={People} alt="slide" />
              <div className="card-img-overlay">
                <div className="card-header">
                  <h1 className="cardHeading title1"> Safe </h1>
                </div>
                <br />
                <p className="card-text text1">
                  All tutors and students have a background verification.
                </p>
                <br />
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel-5"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">prev</span>
          </a>

          <a
            className="carousel-control-next"
            href="#carousel-5"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">next</span>
          </a>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
