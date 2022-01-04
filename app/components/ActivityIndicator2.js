import LottieView from 'lottie-react-native';
import React from 'react';

const ActivityIndicator2 = ({ visible }) => {
    if (!visible) return null;
    return (
        <LottieView
            autoPlay
            loop
            source={require('../assets/loading2.json')}
            style={{ backgroundColor: 'white', elevation: 15 }}
        />
    );
};

export default ActivityIndicator2;
