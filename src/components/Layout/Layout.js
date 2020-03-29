import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider, Grid } from '@material-ui/core';
import flightAppTheme from 'styles/theme';
import useAuthContext from 'hooks/useAuthContext';
import TopBar from 'components/TopBar';
import NavigationBar from 'components/NavigationBar';


function Layout({ children }) {
  const { authenticated } = useAuthContext();

  return (
    <ThemeProvider theme={flightAppTheme}>
      <Grid>
        {authenticated && <TopBar />}
        {children}
        {authenticated && <NavigationBar />}
      </Grid>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: propTypes.element.isRequired,
};

export default Layout;
