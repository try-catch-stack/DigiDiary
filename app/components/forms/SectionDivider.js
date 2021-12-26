import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../CustomText';
import colors from '../../config/colors';

const SectionDivider = () => {
    return (
        <View style={styles.sectionDivider}>
            <View
                style={{
                    flex: 0.42,
                    borderBottomWidth: 1,
                    borderColor: colors.light,
                }}
            ></View>
            <Text style={{ marginHorizontal: 10, color: '#C0C0C0' }}>Or</Text>
            <View
                style={{
                    flex: 0.42,
                    borderBottomWidth: 1,
                    borderColor: colors.light,
                }}
            ></View>
        </View>
    );
};

export default SectionDivider;

const styles = StyleSheet.create({
    sectionDivider: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
