import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    Text,
  } from 'react-native';

import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';
const AppNavContainer = () => {

    const {authState: {isLoggedIn}} = useContext(GlobalContext);
    console.log('state:>>', isLoggedIn);

    return (
        <NavigationContainer>
            { isLoggedIn ? <DrawerNavigator /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}

export default AppNavContainer;