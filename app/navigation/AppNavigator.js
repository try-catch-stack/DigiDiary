import React from 'react';
import Text from '../components/CustomText';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
} from '@expo/vector-icons';

import BookmarkedPostsNavigator from './BookmarkedPostsNavigator';
import routes from './routes';
import PostsNavigator from './PostsNavigator';
import AddPostButton from '../components/AddPostButton';
import AddPost from '../screens/AddPost';

const Tab = createBottomTabNavigator();

const Trending = () => {
    return <Text>Trending</Text>;
};
const Bookmarks = () => {
    return <Text>Bookmarks</Text>;
};
const Profile = () => {
    return <Text>Profile</Text>;
};

const AppNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen
                name="Home"
                component={PostsNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" color={color} size={size} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Trending"
                component={Trending}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="trending-up"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            /> */}
            <Tab.Screen
                name="AddPost"
                component={AddPost}
                options={({ navigation }) => ({
                    headerShown: false,
                    tabBarButton: () => (
                        <AddPostButton
                            onPress={() => navigation.navigate(routes.ADD_POST)}
                        />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="plus" color={color} size={size} />
                    ),
                    title: 'Add Post',
                })}
            />
            <Tab.Screen
                name="Bookmarks"
                component={BookmarkedPostsNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="bookmark-o"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    );
};

export default AppNavigator;
