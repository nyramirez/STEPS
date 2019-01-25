import React from "react";
import Nav from "./components/Nav/Nav";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
