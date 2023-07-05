import styled from 'styled-components/native';

type ButtonTextProps = {
  color: string;
};

export const TouchableContainer = styled.TouchableOpacity`
  width: 90%;
  background-color: ${({theme}) => theme.COLORS.PURPLE};
  height: 60px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  margin-top: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props => props.color};
  font-size: ${({theme}) => theme.FONT_SIZE[16]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.MEDIUM};
`;
