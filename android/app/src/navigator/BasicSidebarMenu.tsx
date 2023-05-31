import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const BasicSidebarMenu = () => {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
