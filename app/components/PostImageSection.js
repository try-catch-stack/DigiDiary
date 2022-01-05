import React, { useContext } from 'react';
import {
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Share,
} from 'react-native';
import Constants from 'expo-constants';
import { BlurView } from 'expo-blur';

import AuthContext from '../auth/authContext';
import PostsContext from '../context/postsContext';
import postsApi from '../api/posts';
import useApi from '../api/useApi';
import CustomIcon from './Icon';
import bookmarkToast from './BookmarkToast';

const PostImageSection = ({ post }) => {
    const { bookmarkedPosts, setBookmarkedPosts } = useContext(PostsContext);
    const { user } = useContext(AuthContext);
    const getBookmarkedPostsApi = useApi(postsApi.getBookmarkedPosts);

    const handleBookmark = async (post) => {
        const response = await postsApi.bookmarkPost(post.id);
        setBookmarkedPosts(getBookmarkedPostsApi.data);
        bookmarkToast(user, response);
    };

    const handleShare = async (post) => {
        try {
            const response = await Share.share({
                title: post.title,
                message: post.post_content,
            });
        } catch (err) {
            console.log('Error ' + err);
        }
    };

    return (
        <View style={styles.imageSectionContainer}>
            <View style={styles.imageSection}>
                <Image
                    style={{ height: '100%', width: '100%' }}
                    source={{ uri: post.image_url }}
                />
                <BlurView
                    intensity={30}
                    tint="dark"
                    style={styles.textContainer}
                >
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.dateAndTopic}>
                        {post.created_at} --- {post.author.username}
                    </Text>
                </BlurView>
            </View>
            <View style={styles.actionButtons}>
                <TouchableOpacity onPress={() => handleShare(post)}>
                    <CustomIcon name="share" elevation={10} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Liked')}>
                    <CustomIcon name="heart" iconColor="red" elevation={10} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleBookmark(post)}>
                    <CustomIcon name="bookmark-o" elevation={10} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PostImageSection;

const styles = StyleSheet.create({
    actionButtons: {
        bottom: 0,
        elevation: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        right: 20,
        width: 160,
    },
    imageSection: {
        borderRadius: 40,
        elevation: 10,
        height: 350,
        overflow: 'hidden',
    },
    imageSectionContainer: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
        paddingBottom: 22,
    },
    textContainer: {
        bottom: 0,
        padding: 25,
        position: 'absolute',
        width: '100%',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'notoserif',
        marginBottom: 5,
    },
    dateAndTopic: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'sans-serif-light',
    },
});
