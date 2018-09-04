import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from '../components/Layout';

const LoginPage = () => {
  return (
    <Layout>
      <Header as="h2">Dynamically Loaded Page</Header>
      <p>Page was loaded asynchronously</p>
    </Layout>
  );
};

export default LoginPage;