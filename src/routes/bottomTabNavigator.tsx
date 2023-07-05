/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {ArrowsLeftRight, ChartPieSlice, House} from 'phosphor-react-native';
import Home from '@pages/Home';
import theme from 'src/theme';
import Trade from 'src/pages/Trade';

type TabRoutes = {
  Home: undefined;
  Trade: undefined;
  Portfolio: undefined;
};

export type TabNavigatorRoutesProps = BottomTabNavigationProp<TabRoutes>;

const Tab = createBottomTabNavigator<TabRoutes>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.COLORS.WHITE},
        tabBarActiveTintColor: theme.COLORS.PURPLE,
        tabBarInactiveTintColor: theme.COLORS.BLACK,
        tabBarLabelStyle: {
          color: theme.COLORS.BLACK,
          fontFamily: theme.FONT_FAMILY.BOLD,
          fontSize: theme.FONT_SIZE[10],
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <House
              weight={focused ? 'fill' : 'regular'}
              color={focused ? theme.COLORS.PURPLE : theme.COLORS.BLACK}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Trade'}
        component={Trade}
        options={{
          tabBarIcon: ({focused}) => (
            <ArrowsLeftRight
              color={focused ? theme.COLORS.PURPLE : theme.COLORS.BLACK}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Home}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <ChartPieSlice
              color={focused ? theme.COLORS.PURPLE : theme.COLORS.BLACK}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
