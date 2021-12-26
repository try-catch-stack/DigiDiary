import React from 'react';
import { StyleSheet } from 'react-native';

import Text from '../CustomText';

function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;

    return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
    error: { color: 'red', marginLeft: 30 },
});

export default ErrorMessage;
