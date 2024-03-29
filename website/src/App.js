import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/App2" component={App2} exact /> */}
      </Switch>
    </Router>
  );
};

export default App;
