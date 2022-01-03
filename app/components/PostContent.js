import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Hyperlink from 'react-native-hyperlink';

const PostContent = ({ post }) => {
    const copyToClipboard = (url) => {
        Clipboard.setString(url);
    };

    return (
        <View style={styles.postContent}>
            <Hyperlink
                linkDefault={true}
                onLongPress={(url, text) => copyToClipboard(url)}
                linkStyle={{ color: '#2980b9' }}
            >
                <Text style={styles.postText}>{post.post_content}</Text>
            </Hyperlink>
        </View>
    );
};

export default PostContent;

const styles = StyleSheet.create({
    postContent: {
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    postText: {
        fontFamily: 'Roboto',
        fontSize: 16,
    },
});
