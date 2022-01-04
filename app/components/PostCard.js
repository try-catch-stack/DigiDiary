import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import AuthContext from '../auth/authContext';
import PostsContext from '../context/postsContext';
import postsApi from '../api/posts';
import useApi from '../api/useApi';
import CustomIcon from '../components/Icon';
import bookmarkToast from './BookmarkToast';

const PostCard = ({ onPress, post, bookmarked = false }) => {
    const { bookmarkedPosts, setBookmarkedPosts } = useContext(PostsContext);
    const { user } = useContext(AuthContext);
    const getBookmarkedPostsApi = useApi(postsApi.getBookmarkedPosts);
    const handleBookmark = async (post) => {
        const response = await postsApi.bookmarkPost(post.id);
        setBookmarkedPosts(getBookmarkedPostsApi.data);
        bookmarkToast(user, response);
    };

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.card}
            onPress={onPress}
        >
            <View style={styles.cardImage}>
                <Image
                    source={{
                        uri: post.image_url,
                    }}
                    style={{ height: '100%', width: 120 }}
                />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{post.title}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        width: '100%',
                        justifyContent: 'space-between',
                        bottom: 5,
                        margin: 5,
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.dateAndAuthor}>
                        {post.created_at} --- {post.author.username}
                    </Text>

                    <TouchableOpacity
                        style={styles.bookmarkButton}
                        onPress={() => handleBookmark(post)}
                    >
                        {bookmarked ? (
                            <CustomIcon
                                name="bookmark"
                                backgroundColor={'#F5F5F5'}
                                size={35}
                            />
                        ) : (
                            <CustomIcon
                                name="bookmark-o"
                                backgroundColor={'#F5F5F5'}
                                size={35}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    bookmarkButton: {},
    card: {
        flexDirection: 'row',
        height: 125,
        overflow: 'hidden',
        margin: 10,
    },
    cardContent: {
        borderWidth: 0.5,
        borderColor: '#EAEAEA',
        backgroundColor: '#F5F5F5',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 1,
        flex: 0.7,
        paddingHorizontal: 5,
    },
    cardImage: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flex: 0.3,
        overflow: 'hidden',
    },
    cardTitle: {
        paddingVertical: 12,
    },
    dateAndAuthor: {
        fontSize: 10,
        color: '#A9A9A9',
    },
});
