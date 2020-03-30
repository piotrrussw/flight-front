import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout';
import Router from 'routes';
import AuthProvider from 'providers/AuthProvider';
import SessionProvider from 'providers/SessionProvider';
import flightAppTheme from 'styles/theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <AuthProvider>
      <SessionProvider>
        <BrowserRouter>
          <ThemeProvider theme={flightAppTheme}>
            <Layout>
              <Router />
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </SessionProvider>
    </AuthProvider>
  );
}

export default App;
