import React from 'react';
import background from 'assets/images/home-main-bg.png';
import airbus from 'assets/images/airbus.png';
import { Button, Link, Box } from '@material-ui/core';
import propTypes from 'prop-types';
import './home.scss';

function ControlBox({ children, mt }) {
  return (
    <Box component="span" mt={mt} mb={2} width={1} align="center">
      {children}
    </Box>
  );
}

ControlBox.propTypes = {
  children: propTypes.element.isRequired,
  mt: propTypes.number,
};

ControlBox.defaultProps = {
  mt: 1,
};

function Home() {
  return (
    <div className="home">
      <div className="main-section">
        <img src={background} alt="background" className="bg-image" />
        <div className="content">
          <h1 className="header">Collect your Flights</h1>
          <img className="plane-img" src={airbus} alt="plane - airbus" />
        </div>
      </div>

      <div className="control-section">
        <ControlBox>
          <Button
            className="sign-up"
            href="/sign-up"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Sign up
          </Button>
        </ControlBox>

        <ControlBox>
          <Button
            href="/login"
            variant="outlined"
            color="primary"
            size="large"
            fullWidth
          >
            Sign in
          </Button>
        </ControlBox>

        <ControlBox mt={3}>
          <Link href="/remind-password">Forgot password?</Link>
        </ControlBox>
      </div>
    </div>
  );
}

export default Home;
