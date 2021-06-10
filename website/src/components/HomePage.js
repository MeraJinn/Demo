import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const Home = () => {
  return (
    <HomePage>
      <HomeTitle>
        Welcome to <Span>MeraJinn!</Span>
      </HomeTitle>
      <Content1>
        <h1>
          <Span>Reduce Pollution</Span>
        </h1>
        <p>
          A leading global scientific panel came out with a report claiming
          India can reduce carbon footprint by as much as 20% if it implements
          the theory.
        </p>
      </Content1>
      <Content2>
        <h1>
          <Span>Reduce Traffic</Span>
        </h1>
        <p>
          When people carpool, they reduce the need for 9 to 13 vehicles on the
          road per shared car. Reduce Cost For a person with a longer than
          average commute (e.g., more than 20 KM) and carpooling 250 days a
          year, the potential savings in a two-person carpool could exceed
          ₹10,000! This does not include any savings in parking or toll costs.
        </p>
      </Content2>
    </HomePage>
  );
};

export default Home;

// -----------STYLED COMPONENTS---------

const HomePage = styled.div`
  background: whites;
`;

const Span = styled.span`
  color: #31a565b0;
`;

const HomeTitle = styled.h1`
  position: relative;
  text-align: center;
  top: 30%;
  font-size: 4rem;
  color: black;
`;
const Content1 = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;
const Content2 = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const theme = createMuiTheme({});
