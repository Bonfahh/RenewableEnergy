import React from 'react';
import {ButtonText, TouchableContainer} from './styles';
import {TouchableOpacityProps} from 'react-native';
import theme from 'src/theme';

type ButtonProps = {
  text: string;
  color?: string;
};

const Button = ({
  text,
  color = theme.COLORS.WHITE,
  ...rest
}: ButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableContainer {...rest}>
      <ButtonText color={color}>{text}</ButtonText>
    </TouchableContainer>
  );
};

export default Button;
