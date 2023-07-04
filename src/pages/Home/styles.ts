import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const HeaderWrap = styled.View`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const RowWrap = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Account = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE[14]}px;
`;

export const Portfolio = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE[12]}px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const PortfolioValue = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE[24]}px;
  align-self: center;
`;

export const PercentageWrap = styled.View`
  flex-direction: row;
  margin-left: 2.5px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const PercentageValue = styled.Text`
  color: ${({theme}) => theme.COLORS.GREEN};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE[14]}px;
`;

export const PercentageValueNegative = styled(PercentageValue)`
  color: ${({theme}) => theme.COLORS.RED};
`;

export const RewardsTouchable = styled.TouchableOpacity`
  width: 110px;
  height: 30px;
  background-color: ${({theme}) => theme.COLORS.PURPLE_LIGHT};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: flex-end;
  border-radius: 4px;
`;

export const RewardsText = styled.Text`
  color: ${({theme}) => theme.COLORS.PURPLE};
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE[11]}px;
  margin-left: 5px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GREY_100};
`;

export const CarbonCreditTouchable = styled.TouchableOpacity`
  width: 90%;
  background-color: ${({theme}) => theme.COLORS.PURPLE};
  border-radius: 10px;
  height: 105px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const TextWrap = styled.View`
  width: 50%;
`;

export const CarbonTextM = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE[16]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  margin-bottom: 10px;
`;

export const CarbonText = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE[12]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const BusinessImg = styled.Image.attrs({resizeMode: 'contain'})`
  width: 25%;
`;

export const CardsContainer = styled.View`
  width: 90%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Card = styled.View`
  width: 45%;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.GREY_100};
  height: 215px;
`;

export const CardText = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE[12]}px;
  padding: 10px;
`;
