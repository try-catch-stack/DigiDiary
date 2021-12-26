import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddPostButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.addPostButton}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <AntDesign name="plus" size={30} color="white" />
        </TouchableOpacity>
    );
};

export default AddPostButton;

const styles = StyleSheet.create({
    addPostButton: {
        alignItems: 'center',
        backgroundColor: '#0f52ba',
        borderRadius: 40,
        bottom: 20,
        elevation: 10,
        height: 60,
        justifyContent: 'center',
        width: 60,
    },
});
