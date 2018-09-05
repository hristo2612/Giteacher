import React from 'react';
import { Header } from 'semantic-ui-react';
import Form from './Form';

const Register = () => {
  return (
    <div>
      <Header style={{textAlign: 'center'}} as="h2">Register</Header>
      <Form/>
    </div>
  );
};

export default Register;