import React, { Component } from "react";
import Thanh from "../../images/Thanh.jpg";
import Nestor from "../../images/Nestor.jpg";
import Akanksha from "../../images/Akanksha.jpg";
import "./style.css"

class About extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <center><h2>What is STEPS?</h2></center>
        <div className="container">
          <hr className="underlineStyle" />
          <br></br>
          <h2 className="subtext">STEPS is recognized as a marketplace where your search for professional meets.
              We provide service for all ages, and at all levels(beginners-advanced).We feel proud about providing a personalised learning scheme, based around your goals.
              It does not matter who you are or what you do,if you have skills then this is the platform to showcase your talent.We believe in promoting your skills and talents.We provide tutors for various fields like maths.swimming,abacus,computer language or any other subject.We are here to help with just EVERYTHING!
      </h2>
          <br />
          <center><h2>Our Visionaries</h2></center>
          <hr className="underlineStyle" />
          <br />
          <div className="row aboutPage">
            <div className="col-sm-3">
              <a href="https://www.linkedin.com/in/thanhqd90/" target="blank">
                <div class="hvrbox">
                  <img src={Thanh} alt="Thanh Q Dang" class="hvrbox-layer_bottom aboutImg" />
                  <div class="hvrbox-layer_top">
                    <div class="hvrbox-text">Thanh Q Dang <br />
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
                    <div class="hvrbox-text">Akanksha Kapoor <br />
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
                    <div class="hvrbox-text">Nestor Ramirez<br />
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
