import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import PostCard from '../components/PostCard';
import Screen from '../components/Screen';

const Posts = ({ navigation }) => {
    return (
        <>
            <Screen>
                <ScrollView>
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
                </ScrollView>
            </Screen>
        </>
    );
};

export default Posts;

const styles = StyleSheet.create({});
