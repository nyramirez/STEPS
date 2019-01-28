import React from 'react';
import PropTypes from 'prop-types';
import KidswComputer from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import CoffeStudy from "../../images/macbook-working-people-technology-meeting-office-910844-pxhere.com.jpg";
import KidSwim from "../../images/kid-recreation-pool-underwater-swimming-pool-child-832238-pxhere.com.jpg";
import './style.css';


function LandingBody() {
    return (
        <div className="row landPage">
  <div className="col-auto mr-auto">
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={KidswComputer} alt="Kids learning at computer" />
                </div>
                <div className="carousel-item">
                    <img src={CoffeStudy} alt="People studying at a coffee shop"/>
                </div>
                <div className="carousel-item">
                    <img src={KidSwim} alt="Kid having fun under water"/>
                </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
        </div>
        </div>
    );
}

LandingBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default LandingBody;