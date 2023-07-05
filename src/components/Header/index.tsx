import React from 'react';
import {
  BackArrow,
  Container,
  Hidden,
  Separator,
  Subtitle,
  Title,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

type HeaderProps = {
  showBackButton?: boolean;
  title?: string;
  subtitle?: string;
};

const Header = ({showBackButton = true, title, subtitle}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>
        )}
        {title && subtitle && (
          <>
            <View>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </View>
            <Hidden />
          </>
        )}
      </Container>
      <Separator />
    </>
  );
};

export default Header;
