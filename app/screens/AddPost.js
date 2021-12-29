import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import Constants from 'expo-constants';

import ImagePicker from '../components/forms/ImagePicker';
import Text from '../components/CustomText';
import { Form, FormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(4).label('Title'),
    post: Yup.string().required().label('Post'),
});

const AddPost = () => {
    return (
        <ScrollView contentContainerStyle={styles.addPostContainer}>
            <ImagePicker />

            <Form
                initialValues={{ title: '', post: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="title"
                    placeholder="Title"
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
        </ScrollView>
    );
};

export default AddPost;

const styles = StyleSheet.create({
    addPostContainer: {
        alignItems: 'center',
        paddingVertical: Constants.statusBarHeight,
    },
});
