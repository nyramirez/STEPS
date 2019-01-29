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
                            <img className="card-img" src={KidswComputer} alt="slide"/>
                          </div>
                          
                          <div className="carousel-item imageSpace">
                            <img className="card-img" src={CoffeStudy} alt="slide"/>
                          </div>
                          
                          <div className="carousel-item imageSpace">
                            <img className="card-img" src={KidSwim} alt="slide"/>
                          </div>
                          <div className="carousel-item imageSpace">
                            <img className="card-img" src={People} alt="slide"/>
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
                          <div className="card bg-light mb-3 textSpace" >
                                    <div className="card-header"><h1 className="cardHeading">~~Skills~~</h1></div>
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
                          
                          <div className="carousel-item">
                          <div className="card bg-light mb-3 textSpace" >
                                    <div className="card-header"><h1 className="cardHeading">~~Teach~~</h1></div>
                                    <div className="card-body">
                                        <h3 className="card-title">Tell us about your expertise</h3>
                                        <br/>
                                        <p className="card-text">STEPS is an app for you to promote your skill set and teach it to others</p>
                                    </div>
                                </div>
                          </div>
                          
                          <div className="carousel-item">
                          <div className="card bg-light mb-3 textSpace" >
                                    <div className="card-header"><h1 className="cardHeading">~~Learn~~</h1></div>
                                    <div className="card-body">
                                        <h3 className="card-title">Are you looking for a professor of a subject and you cannot find it ?</h3>
                                        <br/>
                                        <p className="card-text">Look for you professor here. Math, history, Java, swiming lessons,  whatever you imagine, there is a person willing to teach it.</p>
                                    </div>
                                </div>
                          </div>
                          < div className="carousel-item">
                          <div className="card bg-light mb-3 textSpace" >
                                    <div className="card-header"><h1 className="cardHeading">~~Quality Learning~~</h1></div>
                                    <div className="card-body">
                                        <h3 className="card-title">Background check</h3>
                                        <p className="card-text">All professors and student have to pass a background check, we want to keep you safe.</p>
                                        <br/>
                                        <h3 className="card-title">Your decision</h3>
                                        <p className="card-text">Choose based on rating, qualifications and certification who will teach your next className.</p>
                                        <br/>
                                        <h3 className="card-title">Your money</h3>
                                        <p className="card-text">You as a professor, choose your hourly rate, cost per className and the lenght of the className.</p>
                                        <br/>
                                        <h3 className="card-title">Your time</h3>
                                        <p className="card-text">You choose the className time and the location.</p>

                                    </div>
                                </div>
                          </div>
    
                        </div>
                        
                        <a className="carousel-control-prev" href="#carousel-6" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">prev</span>
                        </a>
                        
                        <a className="carousel-control-next" href="#carousel-6" role="button" data-slide="next">
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