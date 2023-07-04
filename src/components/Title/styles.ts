import styled from 'styled-components/native';

export const TitleText = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-size: ${({theme}) => theme.FONT_SIZE[18]}px;
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
`;
