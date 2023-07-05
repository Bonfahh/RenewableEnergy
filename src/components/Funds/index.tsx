/* eslint-disable react-native/no-inline-styles */
import {
  ArrowDownRight,
  ArrowUpRight,
  Leaf,
  Sun,
  Wind,
} from 'phosphor-react-native';
import React from 'react';
import {Image} from 'react-native';
import {PercentageValue, PercentageValueNegative} from 'src/pages/Home/styles';
import theme from 'src/theme';
import {
  Container,
  FundContainer,
  FundName,
  FundValue,
  Row,
  Title,
} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {TabNavigatorRoutesProps} from 'src/routes/bottomTabNavigator';

const Funds = () => {
  const navigation = useNavigation<TabNavigatorRoutesProps>();

  const fundsData = [
    {
      name: 'Wind fund',
      icon: <Wind color="#4A88D0" size={16} />,
      chart: require('@assets/images/chart1.png'),
      value: '$1032.23',
      percentage: '3.51%',
    },
    {
      name: 'Solar fund',
      icon: <Sun color="#F0A719" size={16} />,
      chart: require('@assets/images/chart2.png'),
      value: '$1032.23',
      percentage: '0.13%',
      negative: true,
    },
    {
      name: 'Nature fund',
      icon: <Leaf color="#0FDF8F" size={16} />,
      chart: require('@assets/images/chart3.png'),
      value: '$1122.95',
      percentage: '0.30%',
    },
  ];

  return (
    <Container>
      <Title>Funds</Title>

      <ScrollView
        horizontal
        // Scrollview doesnt scroll because of this below but
        // its buggy for horizontal in this react version
        contentContainerStyle={{flexGrow: 1, width: '100%'}}
        showsVerticalScrollIndicator={false}>
        {fundsData.map(item => (
          <FundContainer
            key={item.name}
            onPress={() => navigation.navigate('Trade')}>
            {item.icon}
            <FundName>{item.name}</FundName>
            <Image
              source={item.chart}
              style={{width: '90%'}}
              resizeMode="contain"
            />
            {item.negative ? (
              <Row>
                <FundValue>{item.value}</FundValue>
                <ArrowDownRight color={theme.COLORS.RED} size={14} />
                <PercentageValueNegative>
                  {item.percentage}
                </PercentageValueNegative>
              </Row>
            ) : (
              <Row>
                <FundValue>{item.value}</FundValue>
                <ArrowUpRight color={theme.COLORS.GREEN} size={14} />
                <PercentageValue>{item.percentage}</PercentageValue>
              </Row>
            )}
          </FundContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Funds;
