import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostDetailView from '../screens/PostDetailView';
import BookmarkedPosts from '../screens/BookmarkedPosts';

const Stack = createNativeStackNavigator();

const PostsNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Saved Posts" component={BookmarkedPosts} />
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
