import React from 'react';
import {Container, Label, TextInput} from './styles';

type InputProps = {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
};

const Input = ({label, placeholder, secureTextEntry = false}: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} />
    </Container>
  );
};

export default Input;
