import React from 'react';
import {View} from 'react-native';
import {
  Account,
  BusinessImg,
  CarbonCreditTouchable,
  CarbonText,
  CarbonTextM,
  Card,
  CardText,
  CardsContainer,
  Container,
  HeaderWrap,
  PercentageValue,
  PercentageWrap,
  Portfolio,
  PortfolioValue,
  RewardsText,
  RewardsTouchable,
  Row,
  RowWrap,
  Separator,
  TextWrap,
} from './styles';
import {
  ArrowUpRight,
  BellSimple,
  Coin,
  UserCircle,
} from 'phosphor-react-native';
import theme from 'src/theme';
import Funds from 'src/components/Funds';

const Home = () => {
  return (
    <Container>
      <HeaderWrap>
        <RowWrap>
          <UserCircle color={theme.COLORS.BLACK} size={32} />
          <Account>Account: $1,457.23</Account>
          <BellSimple color={theme.COLORS.BLACK} size={32} />
        </RowWrap>
        <RowWrap>
          <View>
            <Portfolio>Portfolio</Portfolio>
            <Row>
              <PortfolioValue>$1,245.23</PortfolioValue>
              <PercentageWrap>
                <ArrowUpRight color={theme.COLORS.GREEN} size={14} />
                <PercentageValue>31.82%</PercentageValue>
              </PercentageWrap>
            </Row>
          </View>
          <RewardsTouchable>
            <Coin color={theme.COLORS.PURPLE} size={14} />
            <RewardsText>Earn rewards</RewardsText>
          </RewardsTouchable>
        </RowWrap>
      </HeaderWrap>
      <Separator />
      <Funds />
      <CarbonCreditTouchable>
        <TextWrap>
          <CarbonTextM>Learn more about carbon credits</CarbonTextM>
          <CarbonText>Check out our top tips!</CarbonText>
        </TextWrap>
        <BusinessImg source={require('@assets/images/business.png')} />
      </CarbonCreditTouchable>
      <CardsContainer>
        <Card>
          <CardText>Why should you invest here?</CardText>
        </Card>
        <Card />
      </CardsContainer>
    </Container>
  );
};

export default Home;
