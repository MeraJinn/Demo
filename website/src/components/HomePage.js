import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const Home = () => {
  return (
    <HomePage>
      <HomeTitle>
        Welcome to <Span>MeraJinn!</Span>
        <div>
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginRight: "1rem" }}
            >
              Random
            </Button>
            <Button variant="contained" color="primary">
              Random
            </Button>
          </ThemeProvider>
        </div>
      </HomeTitle>
    </HomePage>
  );
};

export default Home;

// -----------STYLED COMPONENTS---------

const HomePage = styled.div`
  height: 100vh;
  width: 100vw;
  background: #000000df;
`;

const Span = styled.span`
  color: #31a565b0;
`;

const HomeTitle = styled.h1`
  position: relative;
  text-align: center;
  top: 30%;
  font-size: 4rem;
  color: white;
`;

const theme = createMuiTheme({});
