import React from 'react';
import {TitleText} from './styles';

type TitleProps = {
  text: string;
};

const Title = ({text}: TitleProps) => {
  return <TitleText>{text}</TitleText>;
};

export default Title;
