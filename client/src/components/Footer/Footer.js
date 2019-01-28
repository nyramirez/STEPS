import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function Footer(props) {
    return (
        <div className="footer">
        <h5 className="footerHeading">@Copyright 2018</h5>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Footer;
