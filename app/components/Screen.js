import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.screen, style]}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
});
export default Screen;
