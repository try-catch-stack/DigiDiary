import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SuccessIndicator = ({ visible }) => {
    if (!visible) return null;
    return (
        <LottieView
            autoPlay
            source={require('../assets/success.json')}
            style={styles.successIndicator}
        />
    );
};

const styles = StyleSheet.create({
    successIndicator: {
        backgroundColor: 'white',
        zIndex: 10,
    },
});

export default SuccessIndicator;
