import React from 'react';
import PropTypes from 'prop-types';
import KidswComputer from "../../images/computer-person-creative-video-game-play-home-764632-pxhere.com.jpg";
import './style.css';


function LandingBody() {
    return (
        <div className="regPage">

            <div className="card-group">
                <div className="cardImg">
                    <img className="card-img" src={KidswComputer} alt="slide" />
                </div>
                <div className="cardText">
                    <div className="card-body">
                        <form>
                            <h2>Please fill the next information :</h2>
                            <br />
                            <div className="form-group row">
                                <label for="email" className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                    <input type="email" className="form-control-lg" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label for="password" className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control-lg" id="password" placeholder="Password" />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <h2>Confirm password:</h2>
                            <br/>
                            <div className="form-group row">
                                <label for="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control-lg" id="passwordCheck" placeholder="Password" />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <h2>Please select an option:</h2>
                            <br/>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="studentOption" id="studentOption" value="student" checked/>
                                    <label className="form-check-label" for="studentOption">
                                        I am student looking for a tutor
                                    </label>
                            </div>
                            <br/>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="studentOption" id="tutorOption" value="tutor" checked/>
                                    <label className="form-check-label" for="studentOption">
                                        I am a tutor
                                    </label>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <button type="submit" aria-pressed="false" class="btn btn-primary btn-lg btn-block active" value="Submit">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
                    );
                }
        
LandingBody.propTypes = {
    classes: PropTypes.object.isRequired,
        };
        
export default LandingBody;