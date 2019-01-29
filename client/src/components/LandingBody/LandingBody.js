import React from 'react';
import PropTypes from 'prop-types';
import KidswComputer from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import CoffeStudy from "../../images/macbook-working-people-technology-meeting-office-910844-pxhere.com.jpg";
import KidSwim from "../../images/kid-swimming.jpg";
import People from "../../images/class-classroom-conference-desk-education-exhibit-1560887-pxhere.com.jpg";
import './style.css';


function LandingBody() {
    return (
        <section className="pt-5 mb">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-5">

                        <div id="carousel-5" className="carousel slide" data-ride="carousel" data-interval="4000">

                            <ol className="carousel-indicators">
                                <li data-target="#carousel-5" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-5" data-slide-to="1"></li>
                                <li data-target="#carousel-5" data-slide-to="2"></li>
                            </ol>

                            <div className="carousel-inner" role="listbox">

                                <div className="carousel-item imageSpace active">
                                    <img className="card-img" src={KidswComputer} alt="slide" />
                                </div>

                                <div className="carousel-item imageSpace">
                                    <img className="card-img" src={CoffeStudy} alt="slide" />
                                </div>

                                <div className="carousel-item imageSpace">
                                    <img className="card-img" src={KidSwim} alt="slide" />
                                </div>
                                <div className="carousel-item imageSpace">
                                    <img className="card-img" src={People} alt="slide" />
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

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-5">

                        <div id="carousel-6" className="carousel slide" data-ride="carousel" data-interval="4000">

                            <ol className="carousel-indicators">
                                <li data-target="#carousel-6" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-6" data-slide-to="1"></li>
                                <li data-target="#carousel-6" data-slide-to="2"></li>
                            </ol>

                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <div className="card" >
                                        <div className="card-header"><h1 className="cardHeading">~~Skills~~</h1></div>
                                        <div className="card-body">
                                            <h3 className="card-title">Everyone has a skill</h3>
                                            <br />
                                            <ul>
                                                <li><p className="card-text">It does not matter who you are or what you do.</p>
                                                </li>
                                                <br />
                                                <li><h2 className="card-text">If you have skills,we would like you to teach us.</h2>
                                                </li> <br />
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="card" >
                                        <div className="card-header"><h1 className="cardHeading">~~Teach~~</h1></div>
                                        <div className="card-body">
                                            <h3 className="card-title">Tell us about your expertise</h3>
                                            <br />
                                            <ul>
                                                <p className="card-text">We promote your:</p>
                                                <li>
                                                    <p className="card-text">Skill Set &</p>
                                                </li>
                                                <li><p className="card-text">Talent</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="card" >
                                        <div className="card-header"><h1 className="cardHeading">~~Learn~~</h1></div>
                                        <div className="card-body">
                                            <h3 className="card-title">Looking for a right professor for a subject?</h3>
                                            <br />
                                            <ul>
                                                <p className="card-text">We can arrange for all:</p>
                                                <li><p className="card-text"> School Subjects, </p></li>
                                                <li><p className="card-text"> Computer SCience, </p></li>
                                                <li><p className="card-text"> Swimming, </p></li>
                                                <li><p className="card-text"> Music, </p></li>
                                                <li><p className="card-text"> Dancing, etc. etc. </p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                < div className="carousel-item">
                                    <div className="card" >
                                        <div className="card-header"><h1 className="cardHeading">~~Quality Learning~~</h1></div>
                                        <div className="card-body">
                                        <h3 className="card-title">We care ,that's why:</h3>

                                            <ul>
                                                {/* <h3 className="card-text">For safety,must background check for students and professors </h3> */}
                                                <li>  <p className="card-text">For safety,must background check for students and professors.</p>
                                                    {/* <h3 className="card-title">Your decision</h3> */}
                                                </li>
                                                <li> <p className="card-text">Students can choose from high rated professors.</p>
                                                    {/* <h3 className="card-title">Your money</h3> */}
                                                </li>
                                                <li>  <p className="card-text">Professors can set their hourly rates.</p>
                                                </li>
                                                {/* <h3 className="card-title">Your time</h3> */}
                                                <li> <p className="card-text">Easy to choose class time and location</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <a className="carousel-control-prev" href="#carousel-6" role="button" data-slide="prev">
                                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                <span className="sr-only">prev</span>
                            </a>

                            <a className="carousel-control-next" href="#carousel-6" role="button" data-slide="next">
                                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
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