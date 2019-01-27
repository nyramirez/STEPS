import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/STEPS LOGO.png';
import './style.css';


function LandingPageNav(props) {
    return (
        <div className="landingNav card-panel">
            <div className="row">
                <div className="col l3 s12">
                    <img href="/" src={logo} alt="steps logo" className="logo"></img>
                </div>
                <div className="col l5 s12">
                    <div className="body">
                        <div className="main">
                            <a href="/" className="marker"> </a>
                            <a href="/"><h1 className="r">S</h1></a>
                            <a href="/"><h1 className="e1">T</h1></a>
                            <a href="/"><h1 className="s1">E</h1></a>
                            <a href="/"><h1 className="s2">P</h1></a>
                            <a href="/"><h1 className="e2">S</h1></a>
                        </div>
                    </div>
                </div>
                <div className="col l4 s12">
                    <div className="row landingNavSpacer"></div>
                    <div className="row">
                        <div className="col l3 s12"></div>
                        <div className="col l3 s12">
                            <a className="registerText" href="/register" color="inherit" >Register </a>
                        </div>
                        <div className="col l3 s12">
                            <a className="loginText" href="/login" color="inherit" >Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

LandingPageNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default LandingPageNav;
