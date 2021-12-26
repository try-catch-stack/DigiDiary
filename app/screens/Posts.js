import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import PostCard from '../components/PostCard';
import Screen from '../components/Screen';

const Posts = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <Screen>
                    <PostCard
                        onPress={() => navigation.navigate('PostDetailView')}
                    />
                    <PostCard
                        onPress={() => navigation.navigate('PostDetailView')}
                    />
                    <PostCard
                        onPress={() => navigation.navigate('PostDetailView')}
                    />
                    <PostCard
                        onPress={() => navigation.navigate('PostDetailView')}
                    />
                    <PostCard
                        onPress={() => navigation.navigate('PostDetailView')}
                    />
                    <PostCard
                        onPress={() => navigation.navigate('PostDetailView')}
                    />
                    <PostCard
                        onPress={() => navigation.navigate('PostDetailView')}
                    />
                    <PostCard
                        onPress={() => navigation.navigate('PostDetailView')}
                    />
                </Screen>
            </ScrollView>
        </>
    );
};

export default Posts;

const styles = StyleSheet.create({});
