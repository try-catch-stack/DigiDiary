import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import PostCard from '../components/PostCard';
import Screen from '../components/Screen';
import useApi from '../api/useApi';
import postsApi from '../api/posts';

const Posts = ({ navigation }) => {
    const getPostsApi = useApi(postsApi.getPosts);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getPostsApi.request();
    }, []);

    const renderPost = ({ item }) => (
        <PostCard
            key={item.id}
            onPress={() => navigation.navigate('PostDetailView', { item })}
            post={item}
        />
    );
    const handleRefresh = () => {
        getPostsApi.request();
    };

    return (
        <>
            <Screen>
                <FlatList
                    data={getPostsApi.data}
                    renderItem={renderPost}
                    keyExtractor={(item) => item.id}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />
            </Screen>
        </>
    );
};

export default Posts;

const styles = StyleSheet.create({});
