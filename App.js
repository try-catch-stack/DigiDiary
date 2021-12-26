import React from 'react';
import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import PostsNavigator from './app/navigation/PostsNavigator';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    );
}
