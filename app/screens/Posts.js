import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import PostCard from '../components/PostCard';
import Screen from '../components/Screen';
import useApi from '../api/useApi';
import postsApi from '../api/posts';

const Posts = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const getPostsApi = useApi(postsApi.getPosts);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setLoading(true);
        getPostsApi.request();
        setLoading(false);
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
                <ActivityIndicator visible={loading} />
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
