import React from 'react';
import {
  Box, Grid, Link, TextField,
} from '@material-ui/core';
import propTypes from 'prop-types';
import AuthSubmit from 'components/AuthSubmit';
import { ArrowBack } from '@material-ui/icons';
import './register.scss';

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

function Register() {
  const submitField = { text: 'Sign up' };
  const field = { href: '/login', text: 'Sign in' };

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

      <Box pl={4} mt={1} mb={2}>
        <h1 className="header">Sign up</h1>
      </Box>

      <form className="register-form" noValidate autoComplete="off">
        <ControlBox>
          <TextField
            id="email-field"
            label="Email"
            variant="outlined"
            required
            type="email"
            fullWidth
          />
        </ControlBox>

        <ControlBox>
          <TextField
            id="login-field"
            label="Login"
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
            type="password"
            fullWidth
          />
        </ControlBox>

        <AuthSubmit field={field} submitField={submitField} />
      </form>
    </Grid>
  );
}

export default Register;
