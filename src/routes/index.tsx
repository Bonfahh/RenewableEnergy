import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import BottomTabNavigator from './bottomTabNavigator';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';

type AuthRoutes = {
  Login: undefined;
  SignUp: undefined;
};

export type AuthNavigatorRoutesProps = StackNavigationProp<AuthRoutes>;

const Stack = createStackNavigator<AuthRoutes>();

const createRouter = (signed = false) => {
  return !signed ? (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  ) : (
    <BottomTabNavigator />
  );
};

export default createRouter;
