import Button from 'src/components/Button';
import styled from 'styled-components/native';

type TouchableProps = {
  bgColor: string;
};

type OptionProps = {
  color: string;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const QuoteWrap = styled.View`
  flex-direction: row;
  margin-top: 30px;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;

export const QuoteValue = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-size: ${({theme}) => theme.FONT_SIZE[24]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const PercentageWrap = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5px;
`;

export const PercentageValue = styled.Text`
  color: ${({theme}) => theme.COLORS.GREEN};
  font-size: ${({theme}) => theme.FONT_SIZE[14]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const ChartImg = styled.Image.attrs({resizeMode: 'contain'})`
  width: 100%;
  margin-top: 20px;
`;

export const OptionsWrap = styled.View`
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  flex-direction: row;
`;

export const OptionsTouchable = styled.TouchableOpacity<TouchableProps>`
  background-color: ${props => props.bgColor};
  border-radius: 4px;
`;

export const OptionsText = styled.Text<OptionProps>`
  color: ${props => props.color};
  font-size: ${({theme}) => theme.FONT_SIZE[15]}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.MEDIUM};
  padding: 5px;
`;

export const InfoContainer = styled.View`
  width: 90%;
  margin-top: 40px;
`;

export const InfosTitle = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE[17]}px;
  margin-bottom: 15px;
`;

export const StatsWrap = styled.View`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const StatContainer = styled.View`
  width: 50%;
  margin-bottom: 15px;
`;

export const StatRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
`;

export const StatTitle = styled.Text`
  color: ${({theme}) => theme.COLORS.GREY_700};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE[14]}px;
  margin-right: 5px;
`;

export const StatValue = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE[14]}px;
`;

export const PortfolioContainer = styled.View`
  width: 90%;
`;

export const PortfolioTitleWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
`;

export const PortfolioTitle = styled(InfosTitle)`
  margin-bottom: 0;
  margin-left: 10px;
`;

export const PortfolioWrap = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;

export const PortfolioQuoteWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const SellButton = styled(Button).attrs(({theme}) => ({
  color: theme.COLORS.PURPLE,
  text: 'Sell',
}))`
  width: 45%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-color: ${({theme}) => theme.COLORS.GREY_500};
  border-width: 1px;
`;

export const RetireButton = styled(Button).attrs(({theme}) => ({
  color: theme.COLORS.WHITE,
  text: 'Retire credits',
}))`
  width: 45%;
  background-color: ${({theme}) => theme.COLORS.GREEN};
`;

export const WarnContainer = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GREY_100};
  border-radius: 4px;
  padding: 10px;
  margin-top: 40px;
`;

export const WarnText = styled.Text`
  color: ${({theme}) => theme.COLORS.GREY_700};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE[12]}px;
`;

export const BuyWrap = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
