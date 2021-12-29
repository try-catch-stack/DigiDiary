import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

const CustomImagePicker = () => {
    const [image, setImage] = useState('');
    const openImagePickerAsync = async () => {
        let permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera is required to add image!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setImage(pickerResult.uri);
    };
    const removeImage = () => {
        Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => setImage(null) },
            { text: 'No' },
        ]);
    };

    return (
        <View>
            {!image ? (
                <TouchableOpacity
                    onPress={openImagePickerAsync}
                    activeOpacity={0.8}
                >
                    <View style={styles.cameraIcon}>
                        <MaterialCommunityIcons
                            name="camera-plus-outline"
                            size={100}
                        />
                    </View>
                </TouchableOpacity>
            ) : (
                <>
                    <TouchableOpacity
                        onPress={removeImage}
                        style={styles.close}
                    >
                        <MaterialCommunityIcons
                            name="delete"
                            color="red"
                            size={30}
                        />
                    </TouchableOpacity>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: image }}
                            style={styles.imageStyles}
                        />
                    </View>
                </>
            )}
        </View>
    );
};

export default CustomImagePicker;

const styles = StyleSheet.create({
    cameraIcon: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 40,
        elevation: 10,
        height: 170,
        justifyContent: 'center',
        marginVertical: 20,
        width: 170,
    },
    close: {
        alignItems: 'center',
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        position: 'absolute',
        right: -10,
        top: -10,
        width: 40,
    },
    imageContainer: {
        borderRadius: 20,
        height: 250,
        borderWidth: 1,
        borderColor: colors.light,
        overflow: 'hidden',
        marginHorizontal: 10,
        width: 350,
    },
    imageStyles: {
        borderRadius: 20,
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
});
