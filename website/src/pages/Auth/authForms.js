import React, { useState } from "react";
import { auth } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Modal, Button } from "@material-ui/core";

const getModalStyles = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  auth: {
    outline: "none",
    position: "absolute",
    width: 400,
    backgroundColor: "#232323",
    borderRadius: 4,
    padding: theme.spacing(2, 4, 3),
  },
  field: {
    width: "100%",
    marginBottom: 20,
  },
}));

const Login = ({ openSignIn, setopenSignIn, setOpenSignUp }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyles);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((e) => alert(e.message));

    setopenSignIn(false);
  };

  return (
    <Modal open={openSignIn} onClose={() => setopenSignIn(false)}>
      <div style={modalStyle} className={classes.auth}>
        <form noValidate>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            color="primary"
          />{" "}
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            color="primary"
          />{" "}
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenSignUp(true)}
          >
            Sign Up
          </Button>
          <Button
            type="submit"
            onClick={signIn}
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Modal>
  );
};

const SignUp = ({ openSignUp, setOpenSignUp }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyles);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const SignUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayname: username,
        });
      })
      .catch((e) => alert(e.message));

    setOpenSignUp(false);
  };

  return (
    <Modal open={openSignUp} onClose={() => setOpenSignUp(false)}>
      <div style={modalStyle} className={classes.auth}>
        <form noValidate>
          <TextField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="filled"
            color="primary"
          />{" "}
          <br />
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            color="primary"
          />{" "}
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            color="primary"
          />{" "}
          <br />
          <Button
            type="submit"
            onClick={SignUp}
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export { Login, SignUp };
