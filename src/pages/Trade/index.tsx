/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ButtonsWrap,
  BuyWrap,
  ChartImg,
  Container,
  InfoContainer,
  InfosTitle,
  OptionsText,
  OptionsTouchable,
  OptionsWrap,
  PercentageValue,
  PercentageWrap,
  PortfolioContainer,
  PortfolioQuoteWrap,
  PortfolioTitle,
  PortfolioTitleWrap,
  PortfolioWrap,
  QuoteValue,
  QuoteWrap,
  RetireButton,
  SellButton,
  StatContainer,
  StatRow,
  StatTitle,
  StatValue,
  StatsWrap,
  WarnContainer,
  WarnText,
} from './styles';
import Header from 'src/components/Header';
import {ScrollView, Text} from 'react-native';
import theme from 'src/theme';
import {ArrowUpRight, ChartPieSlice, Info} from 'phosphor-react-native';
import Button from 'src/components/Button';

const options = ['1h', '1d', '1w', '1m', '1y', 'All'];
const stats = [
  {title: 'AUM', value: '$430.88m'},
  {title: 'Issue Date', value: '18/04/2022'},
  {title: 'Vintage Range', value: '2019 – 2022'},
  {title: 'TER', value: '0.15%'},
  {title: 'Price at Close', value: '$17.68'},
  {title: 'Price at Open', value: '$17.74'},
];

const Trade = () => {
  const [selected, setSelected] = useState('1d');

  return (
    <Container>
      <Header title="Wind Fund" subtitle="WFND" />
      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <QuoteWrap>
          <QuoteValue>$18.23</QuoteValue>
          <QuoteValue>2022</QuoteValue>
        </QuoteWrap>
        <PercentageWrap>
          <ArrowUpRight color={theme.COLORS.GREEN} size={12} />
          <PercentageValue>3.51% ($1.21)</PercentageValue>
        </PercentageWrap>
        <ChartImg source={require('@assets/images/chartsmall.png')} />
        <OptionsWrap>
          {options.map(o => (
            <OptionsTouchable
              onPress={() => setSelected(o)}
              key={o}
              bgColor={
                selected === o ? theme.COLORS.PURPLE_LIGHT : 'transparent'
              }>
              <OptionsText
                color={
                  selected === o ? theme.COLORS.PURPLE : theme.COLORS.GREY_700
                }>
                {o}
              </OptionsText>
            </OptionsTouchable>
          ))}
        </OptionsWrap>
        <InfoContainer>
          <InfosTitle>Info & Stats</InfosTitle>
          <StatsWrap>
            {stats.map(s => (
              <StatContainer key={s.title}>
                <StatRow>
                  <StatTitle>{s.title}</StatTitle>
                  <Info color={theme.COLORS.GREY_700} size={14} />
                </StatRow>

                <StatValue>{s.value}</StatValue>
              </StatContainer>
            ))}
          </StatsWrap>
        </InfoContainer>
        <PortfolioContainer>
          <PortfolioTitleWrap>
            <ChartPieSlice color={theme.COLORS.BLACK} size={20} weight="bold" />
            <PortfolioTitle>Your portfolio</PortfolioTitle>
          </PortfolioTitleWrap>
          <PortfolioWrap>
            <QuoteValue>18 credits</QuoteValue>
            <QuoteValue>$328.14</QuoteValue>
          </PortfolioWrap>
          <PortfolioQuoteWrap>
            <PercentageWrap style={{width: 'auto'}}>
              <ArrowUpRight color={theme.COLORS.GREEN} size={12} />
              <PercentageValue>8.41%</PercentageValue>
            </PercentageWrap>
            <StatTitle>Last purchase 28d ago</StatTitle>
          </PortfolioQuoteWrap>
          <ButtonsWrap>
            <SellButton color={theme.COLORS.PURPLE} text="Sell" />
            <RetireButton color={theme.COLORS.WHITE} text="Retire credits" />
          </ButtonsWrap>
          <Text
            style={{
              color: theme.COLORS.GREY_700,
              fontFamily: theme.FONT_FAMILY.REGULAR,
              fontSize: theme.FONT_SIZE[11],
            }}>
            You’ve previously retired 28 credits of this asset
          </Text>
          <WarnContainer>
            <WarnText
              style={{
                marginBottom: 10,
              }}>
              Please note that prices are for reference only and may vary at the
              time of excecuting a buy or sell order.
            </WarnText>
            <WarnText>
              The information provided is not investment advice, and should not
              be used as a recommendation to buy or sell assets.
            </WarnText>
          </WarnContainer>
        </PortfolioContainer>
        <BuyWrap>
          <Button text="Buy" />
        </BuyWrap>
      </ScrollView>
    </Container>
  );
};

export default Trade;
