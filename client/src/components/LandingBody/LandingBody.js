import React from 'react';
import PropTypes from 'prop-types';
import KidswComputer from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import CoffeStudy from "../../images/macbook-working-people-technology-meeting-office-910844-pxhere.com.jpg";
import KidSwim from "../../images/kid-recreation-pool-underwater-swimming-pool-child-832238-pxhere.com.jpg";
import './style.css';


function LandingBody(props) {
    return (
        <div className="container">

            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="5000">
                        <img src={KidswComputer} className="d-block" alt="Kids learning at computer" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>What is STEPS ?</h5>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="5000">
                        <img src={CoffeStudy} className="d-block" alt="People studying at a coffee shop" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="5000">
                        <img src={KidSwim} className="d-block" alt="Kid having fun under water" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    );
}

LandingBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default LandingBody;