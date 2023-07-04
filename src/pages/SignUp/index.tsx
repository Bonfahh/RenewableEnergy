import React from 'react';

import Input from '@components/Input';
import Title from '@components/Title';
import Button from '@components/Button';
import {
  Container,
  LoginText,
  TermsCheckBox,
  TermsContainer,
  TermsText,
} from './styles';
import Header from 'src/components/Header';

const SignUp = () => {
  return (
    <Container>
      <Header />
      <Title text="Create your account" />
      <Input label="First Name" placeholder="Your first name" />
      <Input label="Last Name" placeholder="Your last name" />
      <Input label="E-mail" placeholder="Type your e-mail" />
      <Input
        label="Password"
        placeholder="Minimum 8 characters"
        secureTextEntry
      />
      <TermsContainer>
        <TermsCheckBox />
        <TermsText>
          I am over 18 years of age and I have read and agree to the Terms of
          Service and Privacy policy.
        </TermsText>
      </TermsContainer>
      <Button text="Create account" />
      <LoginText>Already have an account? Log in Here</LoginText>
    </Container>
  );
};

export default SignUp;
