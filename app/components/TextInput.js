import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
    icon =
        typeof icon === 'string' ? (
            <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={{ marginRight: 10 }}
            />
        ) : (
            icon
        );
    return (
        <View style={[styles.container, { width }]}>
            {icon}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text}
                width="90%"
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default AppTextInput;
