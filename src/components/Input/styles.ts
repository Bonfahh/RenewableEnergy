import styled from 'styled-components/native';

type InputProps = {
  isInvalid: boolean;
};

export const Container = styled.View`
  width: 90%;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.COLORS.GREY_700};
  font-size: ${({theme}) => theme.FONT_SIZE[11]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  align-self: flex-start;
  margin-bottom: 5px;
`;

export const TextInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.GREY_500,
}))<InputProps>`
  background-color: ${({theme}) => theme.COLORS.GREY_100};
  border-color: ${({theme}) => theme.COLORS.RED};
  border-width: ${props => (props?.isInvalid ? '1px' : 0)};
  padding-horizontal: 10px;
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  width: 100%;
  height: 50px;
  border-radius: 4px;
`;

export const ErrorMessage = styled.Text`
  color: ${({theme}) => theme.COLORS.RED};
  font-size: ${({theme}) => theme.FONT_SIZE[11]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  align-self: flex-start;
  margin-top: 5px;
`;
