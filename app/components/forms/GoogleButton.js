import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Text from '../CustomText.js';

const GoogleButton = ({ buttonText }) => {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Image
                    source={require('../../assets/googleIcon.png')}
                    style={{ height: 30, width: 30, marginHorizontal: 10 }}
                />
                <Text style={{ color: '#4285F4' }}>
                    {buttonText} with Google
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoogleButton;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: '#4285F4',
        borderRadius: 20,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 15,
        padding: 12,
    },
});
