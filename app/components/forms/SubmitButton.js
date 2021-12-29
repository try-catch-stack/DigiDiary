import React from 'react';
import { useFormikContext } from 'formik';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from '../CustomText';

function SubmitButton({ title, style }) {
    const { handleSubmit } = useFormikContext();

    return (
        <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.button, styles.signInButton, style]}
        >
            <Text
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#2b5cd7',
        borderRadius: 20,
        elevation: 10,
        justifyContent: 'center',
        padding: 14,
        marginHorizontal: 20,
        marginVertical: 15,
    },
});
