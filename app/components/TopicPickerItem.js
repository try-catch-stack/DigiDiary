import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from './Icon';
import Text from './CustomText';

function TopicPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 12,
        width: '100%',
    },
});

export default TopicPickerItem;
