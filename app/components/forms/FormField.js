import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
    const { setFieldTouched, setFieldValue, errors, touched, values } =
        useFormikContext();

    return (
        <>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TextInput
                    onBlur={() => setFieldTouched(name)}
                    onChangeText={(text) => setFieldValue(name, text)}
                    value={values[name]}
                    width={width}
                    {...otherProps}
                />
            </View>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;
