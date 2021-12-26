import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/forms';
import Text from '../components/CustomText';
import SectionDivider from '../components/forms/SectionDivider';
import GoogleButton from '../components/forms/GoogleButton';
import LottieView from 'lottie-react-native';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

const SignIn = ({ navigation }) => {
    return (
        <Screen>
            <View style={{ flex: 0.8 }}>
                <LottieView
                    autoPlay
                    loop={true}
                    source={require('../assets/login.json')}
                />
            </View>
            <GoogleButton buttonText="Sign in" />
            <SectionDivider />
            <View>
                <Form
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
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
                    <SubmitButton title="Sign In" />
                </Form>
            </View>
            <View style={styles.signUpHere}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ color: '#4285F4' }}>Sign up here</Text>
                </TouchableOpacity>
            </View>
        </Screen>
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
