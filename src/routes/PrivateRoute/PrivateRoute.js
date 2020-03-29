import useAuthContext from 'hooks/useAuthContext';
import { Redirect, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import React from 'react';

function PrivateRoute({ component: Component, ...props }) {
  const { authenticated } = useAuthContext();

  return (
    <Route
      {...props}
      render={(renderProps) => (authenticated ? (
        <Component {...renderProps} />
      ) : (
        <Redirect to="/login" />
      ))}
    />
  );
}

PrivateRoute.propTypes = {
  component: propTypes.func.isRequired,
};

export default PrivateRoute;
