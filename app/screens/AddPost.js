import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import Constants from 'expo-constants';

import ActivityIndicator from '../components/ActivityIndicator';
import authStorage from '../auth/authStorage';
import client from '../api/client';
import postsApi from '../api/posts';
import useApi from '../api/useApi';
import ImagePicker from '../components/forms/ImagePicker';
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from '../components/forms';
import FormPicker from '../components/forms/FormPicker';
import TopicPickerItem from '../components/TopicPickerItem';
import SuccessIndicator from '../components/SuccessIndicator';

const validationSchema = Yup.object().shape({
    image: Yup.string().required().label('Image'),
    title: Yup.string().required().min(4).label('Title'),
    topic: Yup.object().required().label('Topic'),
    post: Yup.string().required().label('Post Content'),
});

const AddPost = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState(false);

    const topics = [
        {
            label: 'Computers',
            value: 1,
        },
        {
            label: 'Entertainment',
            value: 2,
        },
        {
            label: 'Fashion',
            value: 3,
        },
        {
            label: 'Food',
            value: 4,
        },
        {
            label: 'Games',
            value: 5,
        },
        {
            label: 'Music',
            value: 6,
        },
        {
            label: 'Politics',
            value: 7,
        },
        {
            label: 'Programming',
            value: 8,
        },
        {
            label: 'Sports',
            value: 9,
        },
        {
            label: 'Technology',
            value: 10,
        },
        {
            label: 'Travel',
            value: 11,
        },
        {
            label: 'Other',
            value: 12,
        },
    ];

    const addPostApi = useApi(postsApi);

    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true);
        const data = new FormData();
        data.append('title', values.title);
        data.append('topic', values.topic.label);
        data.append('image_url', 'http://127.0.0.1:8000/');
        data.append('post_content', values.post);
        const token = await authStorage.getToken();
        const response = await client.post('/app/posts/', data, {
            headers: { Authorization: 'Token ' + token },
        });
        setLoading(false);
        if (!response.ok) return setError(true);
        setSaved(true);
        setError(false);
        resetForm();
        setTimeout(() => {
            navigation.navigate('Home');
            setSaved(false);
        }, 1200);
    };

    return (
        <>
            <ActivityIndicator visible={loading} />
            <SuccessIndicator visible={saved} />
            <ScrollView
                contentContainerStyle={styles.addPostContainer}
                nestedScrollEnabled={true}
            >
                <Form
                    initialValues={{
                        image: '',
                        title: '',
                        topic: '',
                        post: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ImagePicker name="image" />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="title"
                        placeholder="Title (Max 100 characters)"
                        width={'90%'}
                        maxLength={100}
                        multiline
                    />
                    <FormPicker
                        items={topics}
                        name="topic"
                        numberOfColumns={1}
                        PickerItemComponent={TopicPickerItem}
                        placeholder="Topic"
                        width={'90%'}
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="post"
                        numberOfLines={12}
                        multiline
                        textAlignVertical="top"
                        placeholder="Start writing here"
                        width={'90%'}
                        customError="Custom error message"
                    />
                    <SubmitButton title="Post" style={{ width: '90%' }} />
                </Form>
                <ErrorMessage
                    error="Some error occurred while submitting the post!"
                    visible={error}
                />
            </ScrollView>
        </>
    );
};

export default AddPost;

const styles = StyleSheet.create({
    addPostContainer: {
        alignItems: 'center',
        paddingVertical: Constants.statusBarHeight,
    },
});
