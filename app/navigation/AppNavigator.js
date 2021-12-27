import React from 'react';
import Text from '../components/CustomText';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
} from '@expo/vector-icons';

import routes from './routes';
import PostsNavigator from './PostsNavigator';
import AddPostButton from '../components/AddPostButton';

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
const AddPost = () => {
    return <Text>Add Post</Text>;
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
            <Tab.Screen
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
            />
            <Tab.Screen
                name="AddPost"
                component={AddPost}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <AddPostButton
                            onPress={() => navigation.navigate(routes.ADD_POST)}
                        />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="plus" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="Bookmarks"
                component={Bookmarks}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="bookmark-o"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;
