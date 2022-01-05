import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.welcomeScreen}>
            <View style={styles.animationContainer}>
                <LottieView
                    autoPlay
                    loop={true}
                    source={require('../assets/welcome.json')}
                    style={styles.welcomeAnimation}
                />
            </View>

            <View style={styles.welcomeText}>
                <Text style={styles.titleText}>DigiDiary</Text>
                <Text style={styles.descText}>
                    Share your thoughts with the world
                </Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.button}
                >
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                    style={[styles.button, styles.signInButton]}
                >
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    animationContainer: {
        flex: 0.6,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2b5cd7',
        borderRadius: 15,
        elevation: 10,
        justifyContent: 'center',
        padding: 12,
        marginHorizontal: 15,
        flex: 0.5,
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    descText: {
        fontSize: 18,
        marginTop: 10,
        fontFamily: 'sans-serif-light',
    },
    signInText: { color: '#2b5cd7', fontSize: 16, fontWeight: 'bold' },
    signInButton: {
        borderColor: '#2b5cd7',
        borderRadius: 15,
        backgroundColor: 'white',
    },
    signUpText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-condensed',
    },
    welcomeAnimation: {
        width: 300,
        marginTop: 50,
    },
    welcomeScreen: {
        flex: 1,
        alignItems: 'center',
    },
    welcomeText: { flex: 0.35, alignItems: 'center', marginTop: 15 },
});
