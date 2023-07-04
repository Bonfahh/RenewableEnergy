import {ArrowLeft} from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
`;

export const BackArrow = styled(ArrowLeft).attrs(({theme}) => ({
  color: theme.COLORS.BLACK,
  size: 30,
  weight: 'bold',
}))`
  margin-left: 20px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GREY_100};
`;
