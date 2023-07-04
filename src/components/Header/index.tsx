import React from 'react';
import {BackArrow, Container, Separator} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Header = ({showBackButton = true}) => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>
        )}
      </Container>
      <Separator />
    </>
  );
};

export default Header;
