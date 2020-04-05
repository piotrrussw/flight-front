import useAuthContext from 'hooks/useAuthContext';
import { Redirect, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import useSessionContext from 'hooks/useSessionContext';

function PrivateRoute({
  component: Component, title, value, ...props
}) {
  const { authenticated } = useAuthContext();
  const { sessionData, setSessionData } = useSessionContext();
  const updatePageInfo = () => {
    if (authenticated) {
      const activePage = { title, value };
      setSessionData({ ...sessionData, activePage });
    }
  };

  useEffect(updatePageInfo, [authenticated]);

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
  title: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
};

export default PrivateRoute;
