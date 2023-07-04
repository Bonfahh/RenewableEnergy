import React from 'react';
import {Text, View} from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}>
      <Text style={{color: 'white', fontSize: 32}}>Home</Text>
    </View>
  );
};

export default Home;
