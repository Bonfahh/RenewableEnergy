import React from 'react';
import {ButtonText, TouchableContainer} from './styles';

type ButtonProps = {
  text: string;
};

const Button = ({text}: ButtonProps) => {
  return (
    <TouchableContainer>
      <ButtonText>{text}</ButtonText>
    </TouchableContainer>
  );
};

export default Button;
