import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native';
import * as Yup from 'yup';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import ActivityIndicator2 from '../components/ActivityIndicator2';
import authApi from '../api/auth';
import AuthContext from '../auth/authContext';
import defaultStyles from '../config/styles';
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from '../components/forms';
import Text from '../components/CustomText';
import SectionDivider from '../components/forms/SectionDivider';
import GoogleButton from '../components/forms/GoogleButton';
import authStorage from '../auth/authStorage';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    username: Yup.string().required().min(4).label('Username'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

const SignUp = ({ navigation }) => {
    const [signUpError, setSignUpError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(AuthContext);

    const handleSignUp = async ({ username, email, name, password }) => {
        setLoading(true);
        Keyboard.dismiss();
        const response = await authApi.signUp(username, email, name, password);
        if (!response.ok) return setSignUpError(true);
        console.log(response.ok);
        const signInResponse = await authApi.signIn(username, password);
        console.log(signInResponse);
        if (!signInResponse.ok) return setSignUpError(true);
        setSignUpError(false);
        authStorage.saveToken(signInResponse.data.auth_token);
        const userProfile = await authApi.getProfile(response.data.auth_token);
        setUser(userProfile.data);
        setLoading(false);
    };

    return (
        <>
            <ActivityIndicator2 visible={loading} />
            <KeyboardAvoidingView
                keyboardVerticalOffset={80}
                style={{ flex: 1 }}
                behavior="padding"
            >
                <View
                    style={{
                        flex: 0.5,
                    }}
                ></View>
                {/* <GoogleButton buttonText="Sign up" /> */}
                <View>
                    <ErrorMessage
                        error="An account with same email/username already exists"
                        visible={signUpError}
                    />
                    <Form
                        initialValues={{
                            name: '',
                            username: '',
                            email: '',
                            password: '',
                        }}
                        onSubmit={(values) => handleSignUp(values)}
                        validationSchema={validationSchema}
                    >
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon={
                                <AntDesign
                                    name="idcard"
                                    size={20}
                                    color={defaultStyles.colors.medium}
                                    style={{ marginRight: 10 }}
                                />
                            }
                            name="name"
                            placeholder="Name"
                            textContentType="name"
                            width={'90%'}
                        />
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon={
                                <FontAwesome
                                    name="user"
                                    size={20}
                                    color={defaultStyles.colors.medium}
                                    style={{ marginRight: 10 }}
                                />
                            }
                            name="username"
                            placeholder="Username"
                            textContentType="username"
                            width={'90%'}
                        />
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            name="email"
                            placeholder="Email"
                            textContentType="emailAddress"
                            width={'90%'}
                        />
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            width="90%"
                        />
                        <SubmitButton title="Sign Up" />
                    </Form>
                </View>
                <SectionDivider />
                <View style={styles.signInHere}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={{ color: '#4285F4' }}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    signInHere: {
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 15,
    },
});
