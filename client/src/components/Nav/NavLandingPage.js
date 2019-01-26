import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../images/STEPS LOGO.png';
import './style.css';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        marginLeft: 20,
    },
    logo: {

    }
};

function LandingPageNav(props) {
    return (
        <div className="root">
            <AppBar position="static">
                <Toolbar>
                    <img src={logo} alt="steps logo" className="logo"></img>
                    <Typography variant="h6" color="inherit" className="grow">
                        S T E P S
                    </Typography>
                    <Button href="/page1" color="inherit">Register</Button>
                    <Button href="/page2" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

LandingPageNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPageNav);
