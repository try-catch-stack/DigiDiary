import client from './client';

const signUp = (username, email, name, password) =>
    client.post('/auth/users/', { username, email, name, password });

const signIn = (username, password) =>
    client.post('/auth/token/login', { username, password });

const getProfile = (token) =>
    client.get(
        '/auth/profile/me',
        {},
        {
            headers: { Authorization: 'TOKEN ' + token },
        }
    );

export default {
    signIn,
    getProfile,
    signUp,
};
