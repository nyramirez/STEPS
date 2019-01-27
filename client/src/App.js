import React from "react";
import Page1 from "./pages/login";
import Page2 from "./pages/register";
import LandingPage from "./pages/landingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Page1} />
          <Route exact path="/register" component={Page2} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
