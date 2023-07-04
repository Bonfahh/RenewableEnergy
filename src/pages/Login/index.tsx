import React from 'react';

import Input from '@components/Input';
import Title from '@components/Title';
import Button from '@components/Button';
import {Container, SignUpText} from './styles';

const Login = () => {
  return (
    <Container>
      <Title text="Login" />
      <Input label="E-mail" placeholder="Type your e-mail" />
      <Input
        label="Password"
        placeholder="Minimum 8 characters"
        secureTextEntry
      />
      <Button text="Login" />
      <SignUpText>Don't have an account? Sign up here</SignUpText>
    </Container>
  );
};

export default Login;
