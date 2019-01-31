import React, { Component } from "react";
import NavLandingPage from "../components/LandingNav/NavLandingPage";
import Thanh from "../images/Thanh.jpg";
import Nestor from "../images/Nestor.jpg";
import Akanksha from "../images/Akanksha.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <NavLandingPage />
        <br />
        <br />
        <center><h1>What is STEPS?</h1></center>
        <div className="container">
          <hr className="underlineStyle" />
          <br></br>
          <h2 className="subtext">STEPS is recognized as a marketplace where your search for professional meets.
              We provide service for all ages, and at all levels(beginners-advanced).We feel proud about providing a personalised learning scheme, based around your goals.
              It does not matter who you are or what you do,if you have skills then this is the platform to showcase your talent.We believe in promoting your skills and talents.We provide tutors for various fields like maths.swimming,abacus,computer language or any other subject.We are here to help with just EVERYTHING!
      </h2>
          <br />
          <br />
          <center><h1>Our Visionaries</h1></center>
          <hr className="underlineStyle" />
          <br />
          <div className="row aboutPage">
          <div className="col-sm-3">
          <a href="https://www.linkedin.com/in/thanhqd90/" target="blank">
            <div class="hvrbox">
              <img src={Thanh} alt="Thanh Q Dang" class="hvrbox-layer_bottom aboutImg" />
              <div class="hvrbox-layer_top">
              <div class="hvrbox-text">Thanh Q Dang <br/>
              </div>
              </div>
            </div>
          </a>
          </div>
          <div className="col-sm-3">
          <a href="https://www.linkedin.com/in/akankshakapoor3110/" target="blank">
            <div class="hvrbox">
              <img src={Akanksha} alt="Akanksha Kapoor" class="hvrbox-layer_bottom aboutImg" />
              <div class="hvrbox-layer_top">
              <div class="hvrbox-text">Akanksha Kapoor <br/>
              </div>
              </div>
            </div>
          </a>
          </div>
          <div className="col-sm-3">
          <a href="https://www.linkedin.com/in/nestor-ramirez-30465a10/" target="blank">
            <div class="hvrbox">
              <img src={Nestor} alt="Nestor Ramirez" class="hvrbox-layer_bottom aboutImg" />
              <div class="hvrbox-layer_top">
              <div class="hvrbox-text">Nestor Ramirez<br/>
              </div>
              </div>
            </div>
          </a>
          </div>
          </div>

        </div>
      </div>
    );
  }
}

export default About;


//Second option for cards
// <div class="row cardRow">
/* <div class="col-3">
<div className="card text-center cardAbout">
    <img className="card-img-top" src={Thanh} alt="Thanh Q Dang" />
    <div className="card-body">
      <h5 className="card-title">Thanh Q Dang</h5>
    </div>
  </div>
</div>
<div class="col-3">
<div className="card text-center cardAbout">
  <img className="card-img-top" src={Akanksha} alt="Akanksha Kapoor" />
  <div className="card-body">
    <h5 className="card-title">Akanksha Kapoor</h5>
  </div>
</div>
</div>
<div class="col-3">
<div className="card text-center cardAbout">
  <img className="card-img-top" src={Nestor} alt="Nestor Ramirez" />
  <div className="card-body">
    <h5 className="card-title">Nestor Ramirez</h5>
  </div>
</div>
</div>
</div>
</div> */