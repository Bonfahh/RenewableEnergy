import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

const Home = () => {
  return (
    <Container
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{color: 'black', fontSize: 32}}>Home</Text>
    </Container>
  );
};

export default Home;
