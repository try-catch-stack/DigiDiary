import LottieView from 'lottie-react-native';
import React from 'react';

const ActivityIndicator = ({ visible }) => {
    if (!visible) return null;
    return (
        <LottieView
            autoPlay
            loop
            source={require('../assets/loading1.json')}
            style={{ backgroundColor: 'white', zIndex: 10 }}
        />
    );
};

export default ActivityIndicator;
