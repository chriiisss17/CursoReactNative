import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import Home from '../screen/Home/Home';
import Search from '../screen/Search/Search';
import Profile from '../screen/Profile/Profile';
import CameraInterface from '../components/Camera/CameraInterface';

const BottomTabs = createBottomTabNavigator();

const HomeTab = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => (
          <Icon name="home" size={30} color={colors.midnightblue} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: () => (
          <Icon name="magnify" size={30} color={colors.midnightblue} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: () => (
          <Icon name="account" size={30} color={colors.midnightblue} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Camera"
      component={CameraInterface}
      options={{
        tabBarIcon: () => (
          <Icon name="camera" size={30} color={colors.midnightblue} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default HomeTab;
