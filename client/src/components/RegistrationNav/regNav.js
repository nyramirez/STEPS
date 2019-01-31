import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/Logo.png';
import './style.css';


function RegNav(props) {
    return (
        <div className="landingNav">
            <div className="row">
                <div className="col l6 s12">
                    <a href="/">
                        <img src={logo} alt="steps logo" className="logo" />
                    </a>
                </div>
                <div className="col l6 s12">
                    <div className="row">
                        <div className="col-md offset-md">
                            <a href="/">
                                <h1 className="mainHeading">STEPS</h1>
                            </a>
                            <h1 className="subHeading">A step towards new learning~</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

RegNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default RegNav;
