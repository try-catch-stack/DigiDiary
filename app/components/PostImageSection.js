import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CustomIcon from './Icon';

const PostImageSection = () => {
    return (
        <View style={styles.imageSectionContainer}>
            <View style={styles.imageSection}>
                <Image
                    style={{ height: '100%', width: '100%' }}
                    source={require('../assets/img1.jpg')}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Some text here Some text here and more text here
                    </Text>
                    <Text style={styles.dateAndTopic}>Date --- Topic</Text>
                </View>
            </View>
            <View style={styles.actionButtons}>
                <TouchableOpacity onPress={() => console.log('Shared')}>
                    <CustomIcon name="share" elevation={10} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Liked')}>
                    <CustomIcon name="heart" iconColor="red" elevation={10} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Bookmarked')}>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        right: 20,
        width: 160,
    },
    imageSection: {
        borderRadius: 40,
        height: 350,
        overflow: 'hidden',
    },
    imageSectionContainer: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
        paddingBottom: 15,
    },
    textContainer: {
        position: 'absolute',
        bottom: 25,
        width: '100%',
        padding: 10,
        paddingLeft: 20,
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
