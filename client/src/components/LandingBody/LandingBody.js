import React from 'react';
import PropTypes from 'prop-types';
import KidswComputer from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import CoffeStudy from "../../images/macbook-working-people-technology-meeting-office-910844-pxhere.com.jpg";
import KidSwim from "../../images/kid-swimming.jpg";
import People from "../../images/class-classroom-conference-desk-education-exhibit-1560887-pxhere.com.jpg";
import './style.css';


function LandingBody() {
    return (
        <section className="pt-5">
            <div className="container">
                <div className="row mainPage">
                    <div className="col-12 col-sm-12 c col-lg-6 col-xl-6 mb">

                        <div id="carousel-5" className="carousel slide" data-ride="carousel" data-interval="3000">

                            <ol className="carousel-indicators">
                                <li data-target="#carousel-5" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-5" data-slide-to="1"></li>
                                <li data-target="#carousel-5" data-slide-to="2"></li>
                                <li data-target="#carousel-5" data-slide-to="3"></li>
                            </ol>

                            <div className="carousel-inner" role="listbox">

                                <div className="carousel-item imageSpace active">
                                <div className="card-header"><h1 className="cardHeading">~~Skills~~</h1></div>
                                    <img className="card-img" src={KidswComputer} alt="slide" />
                                    <ul>
                                                <li><p className="card-text">It does not matter who you are or what you do.</p>
                                                </li>
                                                <br />
                                                <li><h2 className="card-text">If you have skills,we would like you to teach us.</h2>
                                                </li> <br />
                                    </ul>
                                </div>

                                <div className="carousel-item imageSpace">
                                <div className="card-header"><h1 className="cardHeading">~~Teach~~</h1></div>
                                    <img className="card-img" src={CoffeStudy} alt="slide" />
                                    <ul>
                                        <li>
                                            <p className="card-text">We promote your skills and talent</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="carousel-item imageSpace">
                                <div className="card-header"><h1 className="cardHeading">~~Learn~~</h1></div>
                                    <img className="card-img" src={KidSwim} alt="slide" />
                                    <ul>
                                        <li>
                                            <p className="card-text">Learn from the professional instructors</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="carousel-item imageSpace">
                                <div className="card-header"><h1 className="cardHeading">~~Quality Check~~</h1></div>
                                    <img className="card-img" src={People} alt="slide" />
                                    <ul>
                                        <li>
                                            <p className="card-text">Background Verified</p>
                                        </li>
                                        <li>
                                            <p className="card-text">Location and Time Check</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <a className="carousel-control-prev" href="#carousel-5" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">prev</span>
                            </a>

                            <a className="carousel-control-next" href="#carousel-5" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

LandingBody.propTypes = {
    classNamees: PropTypes.object.isRequired,
};

export default LandingBody;