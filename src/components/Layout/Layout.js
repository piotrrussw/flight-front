import React from 'react';
import propTypes from 'prop-types';
import { Box } from '@material-ui/core';
import useAuthContext from 'hooks/useAuthContext';
import TopBar from 'components/TopBar';
import NavigationBar from 'components/NavigationBar';

function Layout({ children }) {
  const { authenticated } = useAuthContext();

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="space-between"
    >
      {authenticated && <TopBar />}
      <Box display="flex" height={1} p={2} pl={4} pr={4}>{children}</Box>
      {authenticated && <NavigationBar />}
    </Box>
  );
}

Layout.propTypes = {
  children: propTypes.element.isRequired,
};

export default Layout;
