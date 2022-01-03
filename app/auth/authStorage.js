import * as SecureStore from 'expo-secure-store';

const key = 'AuthToken';

const saveToken = async (value) => {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (err) {
        console.error('Error saving the auth token', err);
    }
};

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (err) {
        console.error('Error getting auth token: ' + err);
    }
};

const removeToken = async () => {
    try {
        await SecureStore.removeItemAsync(key);
    } catch (err) {
        console.log('Error removing the auth token ', err);
    }
};

export default { saveToken, getToken, removeToken };
