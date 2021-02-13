import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/success" component={SuccessPage} />
        <Route path="/freecrashcourse" component={LandingPage} />
        <Redirect from="/" to="/freecrashcourse" />
      </Switch>
    </Router>
  );
}

export default App;
