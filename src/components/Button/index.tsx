import React from 'react';
import {ButtonText, TouchableContainer} from './styles';
import {TouchableOpacityProps} from 'react-native';

type ButtonProps = {
  text: string;
};

const Button = ({text, ...rest}: ButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableContainer {...rest}>
      <ButtonText>{text}</ButtonText>
    </TouchableContainer>
  );
};

export default Button;
