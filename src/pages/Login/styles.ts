import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const SignUpText = styled.Text`
  color: ${({theme}) => theme.COLORS.GREY_700};
  font-size: ${({theme}) => theme.FONT_SIZE[12]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  margin-top: 15px;
`;
