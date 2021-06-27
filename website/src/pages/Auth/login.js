import { Input } from "@material-ui/core";
import React, { useCallback, useContext } from "react";
import app from "../../firebase";
import { AuthContext } from "./auth";
import { Redirect } from "react-router";

const Login = ({ history }) => {
  const handleSignin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Sign - IN</h1>
      <div style={{ marginTop: "10%", marginLeft: "30%", display: "block" }}>
        <form onSubmit={handleSignin}>
          <label>
            Email
            <input placeholder="email" />
          </label>
          <label>
            Password
            <Input placeholder="password" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
