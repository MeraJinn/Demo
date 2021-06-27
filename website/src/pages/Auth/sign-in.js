import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import PrivateRoute from "./PrivateRoute";
import Home from "../index";

const SigninPage = () => {
  return (
    <Router>
      <>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Link to="/signup">To Sign Up page</Link>
        <hr />
        <Link to="/signin">To Sign In page</Link>
      </>
    </Router>
  );
};

export default SigninPage;
