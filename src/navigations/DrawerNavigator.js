import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    View,
    Text,
  } from 'react-native';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeNames';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )

}

export default DrawerNavigator;