import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout';
import Router from 'routes';
import AuthProvider from 'providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
