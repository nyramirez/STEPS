import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function Footer(props) {
    return (
        <div className="footer">
            <a className="aboutUs" href="/about" color="inherit" >About Us </a>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Footer;
