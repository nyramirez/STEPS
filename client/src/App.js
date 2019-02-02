import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";
import Page1 from "./pages/login";
import Page2 from "./pages/register";
import LandingPage from "./pages/landingPage";
import CreateProfile from "./components/create-profile/CreateProfile";

import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Navbar /> */}

            <Route exact path="/" component={LandingPage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Page2} />
            <Route exact path="/login" component={Page1} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={ContactUs} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            {/* <Route exact path="/not-found" component={NotFound} /> */}

            {/* <Footer /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
