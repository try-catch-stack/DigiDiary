import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

import authStorage from './app/auth/authStorage';
import authApi from './app/api/auth';
import AuthContext from './app/auth/authContext';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import PostsContext from './app/context/postsContext';

export default function App() {
    const [user, setUser] = useState();
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
    const [isReady, setIsReady] = useState(false);

    const retrieveUser = async () => {
        const authToken = await authStorage.getToken();
        if (!authToken) return console.log('User is not logged in!');
        const userProfile = await authApi.getProfile(authToken);
        setUser(userProfile.data);
    };

    if (!isReady)
        return (
            <AppLoading
                startAsync={retrieveUser}
                onFinish={() => setIsReady(true)}
                onError={(error) => console.log(error)}
            />
        );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <PostsContext.Provider
                value={{ bookmarkedPosts, setBookmarkedPosts }}
            >
                <NavigationContainer theme={navigationTheme}>
                    {user ? <AppNavigator /> : <AuthNavigator />}
                </NavigationContainer>
            </PostsContext.Provider>
        </AuthContext.Provider>
    );
}
