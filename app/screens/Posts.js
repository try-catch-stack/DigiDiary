import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import PostCard from '../components/PostCard';
import Screen from '../components/Screen';

const Posts = () => {
    return (
        <>
            <ScrollView>
                <Screen>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </Screen>
            </ScrollView>
        </>
    );
};

export default Posts;

const styles = StyleSheet.create({});
