import React from 'react';
import {BackArrow, Container, Separator} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = () => {
  return (
    <>
      <Container>
        <TouchableOpacity>
          <BackArrow />
        </TouchableOpacity>
      </Container>
      <Separator />
    </>
  );
};

export default Header;
