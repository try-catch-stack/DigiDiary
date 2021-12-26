import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CustomIcon = ({
    name,
    backgroundColor = 'white',
    iconColor = 'black',
    size = 50,
    elevation = 0,
}) => {
    return (
        <View
            style={[
                styles.icon,
                {
                    backgroundColor: backgroundColor,
                    height: size,
                    width: size,
                    borderRadius: size / 2,
                    elevation: elevation,
                },
            ]}
        >
            <FontAwesome name={name} size={size * 0.5} color={iconColor} />
        </View>
    );
};

export default CustomIcon;

const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
