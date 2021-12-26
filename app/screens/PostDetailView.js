import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PostContent from '../components/PostContent';
import PostImageSection from '../components/PostImageSection';

const Posts = () => {
    return (
        <ScrollView>
            <PostImageSection />
            <PostContent />
        </ScrollView>
    );
};

export default Posts;

const styles = StyleSheet.create({});
