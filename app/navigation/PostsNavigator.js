import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Posts from '../screens/Posts';
import PostDetailView from '../screens/PostDetailView';

const Stack = createNativeStackNavigator();

const PostsNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="Posts"
                    component={Posts}
                    options={{ headerShown: false }}
                />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen
                    name="PostDetailView"
                    component={PostDetailView}
                    options={{ headerShown: false }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default PostsNavigator;
