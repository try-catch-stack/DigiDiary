import React, { useState, useContext } from 'react';
import { Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

import ActivityIndicator2 from '../components/ActivityIndicator2';
import authApi from '../api/auth';
import AuthContext from '../auth/authContext';
import authStorage from '../auth/authStorage';
import defaultStyles from '../config/styles';
import Screen from '../components/Screen';
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from '../components/forms';
import Text from '../components/CustomText';
import SectionDivider from '../components/forms/SectionDivider';
import GoogleButton from '../components/forms/GoogleButton';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).label('Username'),
    password: Yup.string().required().min(4).label('Password'),
});

const SignIn = ({ navigation }) => {
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(AuthContext);

    const handleSignIn = async ({ username, password }) => {
        setLoading(true);
        Keyboard.dismiss();
        const response = await authApi.signIn(username, password);
        if (!response.ok) {
            setLoading(false);
            return setLoginError(true);
        }
        setLoginError(false);
        authStorage.saveToken(response.data.auth_token);
        const userProfile = await authApi.getProfile(response.data.auth_token);
        setLoading(false);
        setUser(userProfile.data);
    };

    return (
        <>
            <ActivityIndicator2 visible={loading} />
            <Screen>
                <View style={{ flex: 0.8 }}>
                    <LottieView
                        autoPlay
                        loop
                        source={require('../assets/login.json')}
                    />
                </View>
                {/* <GoogleButton buttonText="Sign in" /> */}
                <View>
                    <ErrorMessage
                        error="Wrong username or password"
                        visible={loginError}
                    />
                    <Form
                        initialValues={{ username: '', password: '' }}
                        onSubmit={(values) => handleSignIn(values)}
                        validationSchema={validationSchema}
                    >
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
                            icon="lock"
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            width="90%"
                        />
                        <SubmitButton title="Sign In" />
                    </Form>
                </View>
                <SectionDivider />
                <View style={styles.signUpHere}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={{ color: '#4285F4' }}>Sign up here</Text>
                    </TouchableOpacity>
                </View>
            </Screen>
        </>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    signUpHere: {
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 15,
    },
});
