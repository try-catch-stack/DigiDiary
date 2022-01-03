import React, { useEffect, useContext, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import PostsContext from '../context/postsContext';
import PostCard from '../components/PostCard';
import useApi from '../api/useApi';
import postsApi from '../api/posts';
import Text from '../components/CustomText';

const BookmarkedPosts = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const { bookmarkedPosts, setBookmarkedPosts } = useContext(PostsContext);
    const getPostsApi = useApi(postsApi.getBookmarkedPosts);

    useEffect(() => {
        getPostsApi.request();
        setBookmarkedPosts(getPostsApi.data);
    }, [bookmarkedPosts]);

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
            {getPostsApi.data.length > 0 ? (
                <FlatList
                    data={getPostsApi.data}
                    renderItem={renderPost}
                    keyExtractor={(item) => item.id}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />
            ) : (
                <View style={styles.noSavedText}>
                    <Text>You do not have any saved posts!</Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    noSavedText: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default BookmarkedPosts;
