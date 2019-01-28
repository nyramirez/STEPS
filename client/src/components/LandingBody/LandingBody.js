import React from 'react';
import PropTypes from 'prop-types';
import KidswComputer from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import CoffeStudy from "../../images/macbook-working-people-technology-meeting-office-910844-pxhere.com.jpg";
import KidSwim from "../../images/kid-recreation-pool-underwater-swimming-pool-child-832238-pxhere.com.jpg";
import ClassPeople from "../../images/class-classroom-conference-desk-education-exhibit-1560887-pxhere.com.jpg";
import './style.css';


function LandingBody() {
    return (
        <div className="row landPage">
            <div className="col-auto mr-auto">
                <div id="#demo" className="carousel slide" data-ride="carousel">
                    {/* <ol className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                    </ol> */}
                    <div className="carousel-inner">
                        <div className="row carousel-item active" data-interval="5000">
                           <div className="card-group">
                                <div className="card bg-dark text-white imageSpace">
                                    <img className="card-img" data-slide="0" src={KidswComputer} alt="Kids learning at computer" data-holder-render="true" />
                                </div>
                                <div className="card bg-light mb-3 textSpace" >
                                    <div className="card-header"><h1>Skills ...</h1></div>
                                    <div className="card-body">
                                        <h3 className="card-title">Everyone has a skill</h3>
                                        <p className="card-text">It does not matter who you are or what you do.</p>
                                        <br/>
                                        <h2 className="card-text">YOU HAVE SKILLS.</h2>
                                        <br/>
                                        <p className="card-text">We would like you to teach us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row carousel-item" data-interval="5000">
                           <div className="card-group">
                                <div className="card bg-dark text-white imageSpace">
                                    <img className="card-img" data-slide="1" src={CoffeStudy} alt="People studying at a coffee shop" data-holder-render="true" />
                                </div>
                                <div className="card bg-light mb-3 textSpace" >
                                    <div className="card-header"><h1>Teach !!!</h1></div>
                                    <div className="card-body">
                                        <h3 className="card-title">Tell us about your expertice</h3>
                                        <br/>
                                        <p className="card-text">STEPS is an app for you to promote your skill set and teach it to others</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row carousel-item" data-interval="5000">
                           <div className="card-group">
                                <div className="card bg-dark text-white imageSpace">
                                    <img className="card-img" data-slide="2" src={KidSwim} alt="Kid having fun under water" data-holder-render="true" />
                                </div>
                                <div className="card bg-light mb-3 textSpace" >
                                    <div className="card-header"><h1>Learn !!!</h1></div>
                                    <div className="card-body">
                                        <h3 className="card-title">Are you looking for a professor of a subject and you cannot find it ?</h3>
                                        <br/>
                                        <p className="card-text">Look for you professor here. Math, history, Java, swiming lessons,  whatever you imagine, there is a person willing to teach it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row carousel-item" data-interval="5000">
                           <div className="card-group">
                                <div className="card bg-dark text-white imageSpace">
                                    <img className="card-img" data-slide="3" src={ClassPeople} alt="Kid having fun under water" data-holder-render="true" />
                                </div>
                                <div className="card bg-light mb-3 textSpace" >
                                    <div className="card-header"><h1>Quality Learning</h1></div>
                                    <div className="card-body">
                                        <h3 className="card-title">Background check</h3>
                                        <p className="card-text">All professors and student have to pass a background check, we want to keep you safe.</p>
                                        <br/>
                                        <h3 className="card-title">Your decision</h3>
                                        <p className="card-text">Choose based on rating, qualifications and certification who will teach your next class.</p>
                                        <br/>
                                        <h3 className="card-title">Your money</h3>
                                        <p className="card-text">You as a professor, choose your hourly rate, cost per class and the lenght of the class.</p>
                                        <br/>
                                        <h3 className="card-title">Your time</h3>
                                        <p className="card-text">You choose the class time and the location.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        {/* <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a> */}
                    </div>
                </div>
            </div>
            );
        }
        
LandingBody.propTypes = {
                classes: PropTypes.object.isRequired,
        };
        
export default LandingBody;