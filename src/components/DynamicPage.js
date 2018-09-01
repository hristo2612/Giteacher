import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">Dynamically Loaded Page</Header>
      <p>Page was loaded asynchronously</p>
    </Layout>
  );
};

export default DynamicPage;