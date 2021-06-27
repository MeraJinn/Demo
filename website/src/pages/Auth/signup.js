import React, { useCallback } from "react";
import app from "../../firebase";

const Signup = ({ history }) => {
  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign - UP</h1>
      <form onSubmit={handleSignup}>
        <div style={{ marginTop: "10%", marginLeft: "30%", display: "block" }}>
          <label>
            Email
            <input placeholder="email" />
          </label>
          <label>
            Password
            <input placeholder="password" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
