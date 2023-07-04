import CheckBox from '@react-native-community/checkbox';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const LoginText = styled.Text`
  color: ${({theme}) => theme.COLORS.GREY_700};
  font-size: ${({theme}) => theme.FONT_SIZE[12]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  margin-top: 15px;
`;

export const TermsContainer = styled.View`
  width: 90%;
  flex-direction: row;
`;

export const TermsCheckBox = styled(CheckBox).attrs({
  boxType: 'square',
  disabled: false,
})`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const TermsText = styled(LoginText)`
  margin-top: 0;
  width: 90%;
`;
