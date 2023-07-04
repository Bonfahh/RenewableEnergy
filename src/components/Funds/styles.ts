import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE[18]}px;
  margin-left: 5%;
  margin-bottom: 20px;
`;

export const FundContainer = styled.View`
  width: 40%;
  margin-left: 5%;
  border-color: ${({theme}) => theme.COLORS.GREY_300};
  border-width: 1px;
  padding-left: 10px;
  padding-vertical: 10px;
  border-radius: 4px;
`;

export const FundName = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE[12]}px;
  margin-vertical: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const FundValue = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE[14]}px;
`;
