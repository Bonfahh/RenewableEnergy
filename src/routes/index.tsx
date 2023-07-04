import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './bottomTabNavigator';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';

const Stack = createStackNavigator();

const createRouter = (signed = false) => {
  return !signed ? (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Index" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default createRouter;
