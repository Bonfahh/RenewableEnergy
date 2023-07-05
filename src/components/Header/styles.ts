import {ArrowLeft} from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.COLORS.BLACK};
  font-size: ${({theme}) => theme.FONT_SIZE[17]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const Subtitle = styled.Text`
  text-align: center;
  color: #808080;
  font-size: ${({theme}) => theme.FONT_SIZE[11]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const Hidden = styled.View`
  width: 30px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GREY_100};
`;

export const BackArrow = styled(ArrowLeft).attrs(({theme}) => ({
  color: theme.COLORS.BLACK,
  size: 30,
  weight: 'bold',
}))`
  align-self: flex-start;
`;
