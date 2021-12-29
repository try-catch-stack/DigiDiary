import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/forms';
import Text from '../components/CustomText';
import SectionDivider from '../components/forms/SectionDivider';
import GoogleButton from '../components/forms/GoogleButton';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    username: Yup.string().required().min(4).label('Username'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

const SignUp = ({ navigation }) => {
    return (
        <Screen>
            <View
                style={{
                    flex: 0.5,
                }}
            ></View>
            <GoogleButton buttonText="Sign up" />
            <SectionDivider />
            <View>
                <Form
                    initialValues={{
                        name: '',
                        username: '',
                        email: '',
                        password: '',
                    }}
                    onSubmit={(values) => console.log(values)}
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
            <View style={styles.signInHere}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{ color: '#4285F4' }}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </Screen>
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
