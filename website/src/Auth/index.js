import React, { useState } from "react";
import { auth } from "../firebase";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { TextField, Modal, Button } from "@material-ui/core";
import { Fade, Backdrop } from "@material-ui/core";

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
    backgroundColor: "#121823",
    borderRadius: 7,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  field: {
    width: "100%",
    marginBottom: 20,
  },
  loginButton: {
    marginLeft: "20%",
    marginBottom: "6px",
    width: 200,
  },
  orSpan: {
    textAlign: "center",
    marginBottom: "7px",
    color: "#242C3D",
  },
}));

const text = createMuiTheme({
  palette: {
    secondary: {
      main: "#0CB7D3",
      dark: "#242C3D",
    },
    text: {
      primary: "#0CB7D3",
      secondary: "#41506B",
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
    },
  },
});

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
    closeSignIn();
    setopenSignIn(false);
  };

  const closeSignIn = () => {
    setopenSignIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <Modal
      open={openSignIn}
      onClose={closeSignIn}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openSignIn}>
        <div style={modalStyle} className={classes.auth}>
          <form noValidate autoComplete="off">
            <ThemeProvider theme={text}>
              <TextField
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
                color="secondary"
                className={classes.field}
              />{" "}
              <br />
              <TextField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="filled"
                className={classes.field}
                color="secondary"
              />{" "}
            </ThemeProvider>
            <br />
            <Button
              type="submit"
              onClick={signIn}
              variant="contained"
              color="primary"
              className={classes.loginButton}
            >
              Sign In
            </Button>
            <h3 className={classes.orSpan}>
              <span>OR</span>
            </h3>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenSignUp(true)}
              className={classes.loginButton}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Fade>
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
          displayName: username,
        });
      })
      .catch((e) => alert(e.message));

    setOpenSignUp(false);
  };

  return (
    <Modal open={openSignUp} onClose={() => setOpenSignUp(false)}>
      <div style={modalStyle} className={classes.auth}>
        <form noValidate autoComplete="off">
          <ThemeProvider theme={text}>
            <TextField
              id="username"
              label="Username"
              type="text"
              className={classes.field}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="filled"
              color="secondary"
            />{" "}
            <br />
            <TextField
              id="email"
              label="Email"
              className={classes.field}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              color="secondary"
              autoComplete="false"
            />{" "}
            <br />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="filled"
              color="secondary"
              className={classes.field}
            />{" "}
            <br />
          </ThemeProvider>
          <Button
            type="submit"
            onClick={SignUp}
            variant="contained"
            color="primary"
            className={classes.loginButton}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export { Login, SignUp };
