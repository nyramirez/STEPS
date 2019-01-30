import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function Footer(props) {
    return (
        <div className="footer">
                    <div className="row">
                        <div className="col l1 s12"></div>
                        <div className="col l3 s12">
                            <a className="aboutUs" href="/about" color="inherit" >About Us </a>
                        </div>
                    </div>
                </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Footer;
