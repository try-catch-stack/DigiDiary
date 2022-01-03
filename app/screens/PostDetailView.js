import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PostContent from '../components/PostContent';
import PostImageSection from '../components/PostImageSection';

const Posts = ({ route }) => {
    const { item } = route.params;
    return (
        <ScrollView>
            <PostImageSection post={item} />
            <PostContent post={item} />
        </ScrollView>
    );
};

export default Posts;

const styles = StyleSheet.create({});
