import React from 'react';
import propTypes from 'prop-types';
import {
  Box, Grid, TextField, Link,
} from '@material-ui/core';
import AuthSubmit from 'components/AuthSubmit';
import { ArrowBack } from '@material-ui/icons';
import './login.scss';

function ControlBox({ children }) {
  return (
    <Box p={2} pl={4} pr={4}>
      {children}
    </Box>
  );
}

ControlBox.propTypes = {
  children: propTypes.element.isRequired,
};

function Login() {
  const submitField = { text: 'Sign in' };
  const field = { href: '/sign-up', text: 'Sign up' };

  return (
    <Grid container alignContent="center" direction="column">
      <Box color="primary" mt={4} ml={3}>
        <Link className="back-link" href="/">
          <ArrowBack color="primary" fontSize="small" />
          <Box className="back-text" ml={1}>
            Back
          </Box>
        </Link>
      </Box>

      <Box pl={4} mt={1}>
        <h1 className="header">Sign in</h1>
      </Box>

      <form className="login-form" noValidate autoComplete="off">
        <ControlBox>
          <TextField
            id="email-field"
            label="Email"
            variant="outlined"
            required
            fullWidth
          />
        </ControlBox>

        <ControlBox>
          <TextField
            id="password-field"
            label="Password"
            variant="outlined"
            required
            fullWidth
          />

          <Box mt={1}>
            <Link href="/remind-password">Forgot password?</Link>
          </Box>
        </ControlBox>

        <AuthSubmit field={field} submitField={submitField} />
      </form>
    </Grid>
  );
}

export default Login;
