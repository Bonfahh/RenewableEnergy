/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ArrowsLeftRight, ChartPieSlice, House} from 'phosphor-react-native';
import Home from '@pages/Home';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#000'},
        tabBarActiveTintColor: '#fff',
        headerShown: false,
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: () => <House color="#fff" size={32} />,
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Home}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => <ArrowsLeftRight color="#fff" size={32} />,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Home}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => <ChartPieSlice color="#fff" size={32} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
