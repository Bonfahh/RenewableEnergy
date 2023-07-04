import React from 'react';
import {Container, ErrorMessage, Label, TextInput} from './styles';
import {TextInputProps} from 'react-native';

type InputProps = {
  label: string;
  placeholder: string;
  errorMessage?: string | null;
};

const Input = ({
  label,
  placeholder,
  errorMessage = null,
  ...rest
}: InputProps & TextInputProps) => {
  const isInvalid = !!errorMessage;

  return (
    <Container>
      <Label>{label}</Label>
      <TextInput isInvalid={isInvalid} {...rest} placeholder={placeholder} />
      {isInvalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Input;
